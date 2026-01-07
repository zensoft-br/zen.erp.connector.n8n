import { IDataObject, IExecuteFunctions, NodeApiError, NodeOperationError } from "n8n-workflow";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type OperationSecurity = {
    auth: boolean;
    tenant: boolean;
};

interface RequestOptions {
    method: HttpMethod;
    path: string;
    qs?: Record<string, string>;
    body?: IDataObject | IDataObject[] | Buffer | string;
    headers?: Record<string, string>;
    security?: OperationSecurity;
    responseType?: string;
}

export type OperationMeta = {
    operationId: string;
    method: HttpMethod;
    path: string;
    hasBody: boolean;
    security: OperationSecurity;
    responseType?: string;
};

export type OperationHandler = (
    this: IExecuteFunctions,
    itemIndex: number,
) => Promise<unknown | unknown[] | void>;

export function createHandler(op: OperationMeta): OperationHandler {
    return async function (
        this: IExecuteFunctions,
        i: number,
    ): Promise<unknown | unknown[] | void> {
        return executeOperation.call(this, i, op);
    };
}

function operationIdToParamPrefix(operationId: string): string {
    return operationId.replace(/^\/+/, "").replace(/\//g, "_");
}

function resolveRequestBody(
    ctx: IExecuteFunctions,
    itemIndex: number,
    opId: string,
): IDataObject | undefined {
    const raw = ctx.getNodeParameter(
        `${opId}_bodyJson.json`,
        itemIndex,
        {},
    );

    if (raw == null) {
        return undefined;
    }

    // 🔥 n8n retorna STRING para type: "json"
    if (typeof raw === 'string') {
        try {
            return JSON.parse(raw);
        } catch {
            throw new Error('Invalid JSON in request body');
        }
    }

    return JSON.parse(JSON.stringify(raw));
}

function resolvePathParams(
    ctx: IExecuteFunctions,
    itemIndex: number,
    opId: string,
): IDataObject {

    return ctx.getNodeParameter(
        `${opId}_path`,
        itemIndex,
        {},
    ) as IDataObject;
}

function resolveQueryParams(
    ctx: IExecuteFunctions,
    itemIndex: number,
    opId: string,
): Record<string, string> {

    const raw = ctx.getNodeParameter(
        `${opId}_query`,
        itemIndex,
        {},
    ) as IDataObject;

    const qs: Record<string, string> = {};

    for (const [k, v] of Object.entries(raw)) {
        if (v !== undefined && v !== null && v !== '') {
            qs[k] = String(v);
        }
    }

    return qs;
}

async function executeOperation(
    this: IExecuteFunctions,
    i: number,
    op: OperationMeta,
): Promise<unknown | unknown[] | void> {
    const opId = operationIdToParamPrefix(op.operationId);

    const pathParams = /\{/.test(op.path)
        ? resolvePathParams(this, i, opId)
        : {};

    const qs = resolveQueryParams(this, i, opId);

    const body = op.hasBody
        ? resolveRequestBody(this, i, opId) ?? {}
        : undefined;

    const path = op.path.replace(
        /\{(\w+)\}/g,
        (_, p: string) => {
            const value = (pathParams as Record<string, unknown>)[p];
            if (value == null) {
                throw new NodeOperationError(
                    this.getNode(),
                    `Missing path param: ${p}`,
                    { itemIndex: i },
                );
            }
            return String(value);
        },
    );

    let req: RequestOptions = {
        method: op.method,
        path,
        qs,
        security: op.security,
    };

    if (op.responseType) {
        req.headers = {
            ...req.headers,
            'Accept': op.responseType,
        };
    }

    if (body != null) {
        req = {
            ...req,
            body,
            headers: {
                ...req.headers,
                'Content-Type': 'application/json',
            },
        }
    }

    return request.call(this, req);
}

async function request(
    this: IExecuteFunctions,
    options: RequestOptions,
): Promise<unknown | unknown[]> {
    const credentials = await this.getCredentials('zenApi');

    if (!credentials) {
        throw new NodeOperationError(this.getNode(), 'Zen API credentials not found');
    }

    const baseUrl = credentials.baseUrl as string;

    const headers: Record<string, string> = {
        ...(options.headers ?? {}),
    };

    const sec = options.security;
    if (sec?.auth) {
        if (!credentials.token) {
            throw new NodeOperationError(this.getNode(), 'Missing auth token');
        }
        headers.Authorization = `Bearer ${credentials.token}`;
    }

    if (sec?.tenant) {
        if (!credentials.tenant) {
            throw new NodeOperationError(this.getNode(), 'Missing tenant');
        }
        headers.tenant = String(credentials.tenant);
    }

    try {
        return await this.helpers.httpRequest({
            url: baseUrl + options.path,
            method: options.method,
            headers,
            qs: options.qs,
            body: options.body,
            json: options.body !== undefined,
        });
    } catch (err) {
        throw new NodeApiError(this.getNode(), err);
    }
}
