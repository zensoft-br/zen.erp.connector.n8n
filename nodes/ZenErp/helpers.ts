import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';

export function resolveRequestBody(
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

        return (wrapper?.json as IDataObject) ?? {};
    }

    return ctx.getNodeParameter(
        `${opId}_body`,
        itemIndex,
        {},
    ) as IDataObject;
}

export function resolvePathParams(
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

export function resolveQueryParams(
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

export function resolveHeaders(
    ctx: IExecuteFunctions,
    itemIndex: number,
    opId: string,
): Record<string, string> {

    const raw = ctx.getNodeParameter(
        `${opId}_headers`,
        itemIndex,
        {},
    ) as IDataObject;

    const headers: Record<string, string> = {};

    for (const [k, v] of Object.entries(raw)) {
        if (v !== undefined && v !== null && v !== '') {
            headers[k] = String(v);
        }
    }

    return headers;
}

async function executeOperation(
    this: IExecuteFunctions,
    i: number,
    op: {
        operationId: string;
        method: string;
        path: string;
        hasBody: boolean;
    }
): Promise<INodeExecutionData[]> {
    const opId = operationIdToParamPrefix(op.operationId);

    const pathParams = /\{/.test(op.path)
        ? resolvePathParams(this, i, opId)
        : undefined;

    const qs = resolveQueryParams(this, i, opId);

    const body = op.hasBody
        ? resolveRequestBody(this, i, opId)
        : undefined;

    const path = op.path.replace(
        /\{(\w+)\}/g,
        (_, p) => pathParams?.[p],
    );

    return request.call(this, {
        method: op.method,
        path,
        qs,
        ...(op.hasBody ? { body } : {}),
    });
}

function createHandler(op) {
    return async function (this: IExecuteFunctions, i: number) {
        return executeOperation.call(this, i, op);
    };
}

function operationIdToParamPrefix(operationId: string): string {
    return operationId.replace(/^\/+/, "").replace(/\//g, "_");
}
