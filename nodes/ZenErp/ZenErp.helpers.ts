import type { IDataObject } from 'n8n-workflow';
import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { request } from '../../transport/request';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type OperationSecurity = {
    auth: boolean;
    tenant: boolean;
};

export type OperationMeta = {
    operationId: string;
    method: HttpMethod;
    path: string;
    hasBody: boolean;
    security: OperationSecurity;
};

export type OperationHandler = (this: IExecuteFunctions, i: number) => Promise<INodeExecutionData[]>;


function operationIdToParamPrefix(operationId: string): string {
    return operationId.replace(/^\/+/, "").replace(/\//g, "_");
}

function resolveRequestBody(
    ctx: IExecuteFunctions,
    itemIndex: number,
    opId: string,
): IDataObject | undefined {

    const format = ctx.getNodeParameter(
        `${opId}_bodyFormat`,
        itemIndex,
        'fields',
    ) as string;

    if (format === 'json') {
        const wrapper = ctx.getNodeParameter(
            `${opId}_bodyJson`,
            itemIndex,
            {},
        ) as IDataObject;

        const json = (wrapper?.json as IDataObject) ?? {};

        // 🔒 remove referências internas do n8n
        return JSON.parse(JSON.stringify(json));
    }

    const fields = ctx.getNodeParameter(
        `${opId}_body`,
        itemIndex,
        {},
    ) as IDataObject;

    // 🔒 remove referências internas do n8n
    return JSON.parse(JSON.stringify(fields));
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

export function createHandler(op: OperationMeta) {
    return async function (
        this: IExecuteFunctions,
        i: number,
    ): Promise<INodeExecutionData[]> {
        return executeOperation.call(this, i, op);
    };
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
        ? resolveRequestBody(this, i, opId)
        : undefined;

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

    return request.call(this, {
        method: op.method,
        path,
        qs,
        ...(op.hasBody ? { body } : {}),
        security: op.security,
    }) as Promise<INodeExecutionData[]>;
}
