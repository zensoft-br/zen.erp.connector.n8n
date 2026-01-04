import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type HttpError = {
    message?: string;
    response?: {
        status?: number;
        data?: unknown;
    };
};

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
}

export type OperationMeta = {
    operationId: string;
    method: HttpMethod;
    path: string;
    hasBody: boolean;
    security: OperationSecurity;
};

export type OperationHandler = (this: IExecuteFunctions, i: number) => Promise<INodeExecutionData[]>;

export function createHandler(op: OperationMeta) {
    return async function (
        this: IExecuteFunctions,
        i: number,
    ): Promise<INodeExecutionData[]> {
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
): Promise<INodeExecutionData[]> {
    const opId = operationIdToParamPrefix(op.operationId);

    const pathParams = /\{/.test(op.path)
        ? resolvePathParams(this, i, opId)
        : {};

    const qs = resolveQueryParams(this, i, opId);

    const body = op.hasBody
        ? resolveRequestBody(this, i, opId) ?? {}
        : undefined;

    const hasBody = body != null;

    const path = op.path.replace(
        /\{(\w+)\}/g,
        (_, p: string) => {
            const value = (pathParams as Record<string, unknown>)[p];
            if (value == null) {
                throw new Error(`Missing path param: ${p}`);
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

    if (hasBody) {
        req = {
            ...req,
            body,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    }

    return request.call(this, req) as Promise<INodeExecutionData[]>;
}

function isHttpError(err: unknown): err is HttpError {
    return (
        typeof err === 'object' &&
        err !== null &&
        'response' in err
    );
}

async function request(
    this: IExecuteFunctions,
    options: RequestOptions,
): Promise<INodeExecutionData[]> {
    const credentials = await this.getCredentials('zenApi');

    if (!credentials) {
        throw new Error('Zen API credentials not found');
    }

    const baseUrl = credentials.baseUrl as string;

    const headers: Record<string, string> = {
        ...(options.headers ?? {}),
    };

    const sec = options.security;
    if (sec?.auth || sec?.tenant) {
        if (sec.auth) {
            const token = credentials.token as string | undefined;
            if (!token) {
                throw new Error('Missing auth token');
            }
            headers.Authorization = `Bearer ${token}`;
        }

        if (sec.tenant) {
            const tenant = credentials.tenant as string | undefined;
            if (!tenant) {
                throw new Error('Missing tenant');
            }
            headers.tenant = tenant;
        }
    }

    try {
        const response = await this.helpers.httpRequest({
            url: baseUrl + options.path,
            method: options.method,
            headers,
            qs: options.qs,
            body: options.body,
            json: !!options.body,
        });

        const safeResponse = JSON.parse(JSON.stringify(response));

        if (Array.isArray(safeResponse)) {
            return safeResponse.map(item => ({ json: item }));
        }

        return [{ json: safeResponse }];
    } catch (err: unknown) {
        if (isHttpError(err) && err.response?.data !== undefined) {
            const safeError = JSON.parse(JSON.stringify(err.response.data));

            throw new Error(
                `HTTP ${err.response?.status}: ${typeof safeError === 'string'
                    ? safeError
                    : JSON.stringify(safeError)
                }`
            );
        }

        if (err instanceof Error) {
            throw new Error(err.message);
        }

        throw new Error('Request failed');
    }
}
