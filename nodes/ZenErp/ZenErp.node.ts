import type { IExecuteFunctions, INodeExecutionData, INodeProperties, INodeType, INodeTypeDescription, JsonObject } from 'n8n-workflow';
import { NodeApiError, NodeOperationError } from 'n8n-workflow';
import { createHandler, OperationHandler, OperationMeta } from './ZenErp.helpers';
import rawFields from './ZenErp.meta.fields.json';
import rawOperations from './ZenErp.meta.operations.json';

const fields = rawFields as INodeProperties[];
const operations = rawOperations as Record<string, Record<string, OperationMeta>>;

export class ZenErp implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Zen ERP',
    description: 'Zen ERP connector node',
    name: 'zenErp',
    icon: 'file:ZenErp.svg',
    group: ['transform'],
    version: 1,
    usableAsTool: true,
    defaults: {
      name: 'Zen ERP'
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [{
      name: 'zenApi',
      required: true
    }],
    properties: fields,
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnItems: INodeExecutionData[] = [];

    for (let i = 0; i < items.length; i++) {
      try {
        const resource = this.getNodeParameter('resource', i) as string;
        const operation = this.getNodeParameter('operation', i) as string;

        const target = operations[resource]?.[operation];
        if (!target) {
          throw new NodeOperationError(
            this.getNode(),
            `Invalid operation: ${resource} / ${operation}`,
            { itemIndex: i },
          );
        }

        const handler = getOperationHandler(target);
        const result = await handler.call(this, i);

        if (Array.isArray(result)) {
          for (const item of result) {
            returnItems.push({
              json: item as JsonObject,
              pairedItem: { item: i },
            });
          }
        } else if (result !== undefined) {
          returnItems.push({
            json: result as JsonObject,
            pairedItem: { item: i },
          });
        }
      } catch (error) {
        if (this.continueOnFail()) {
          returnItems.push({
            json: {
              error: extractErrorInfo(error),
            },
            pairedItem: { item: i },
          });
          continue;
        }

        throw error;
      }
    }

    return [returnItems];
  }
}

const handlerCache = new Map<string, OperationHandler>();

export function getOperationHandler(op: OperationMeta): OperationHandler {
  const key = op.operationId;

  let fn = handlerCache.get(key);
  if (!fn) {
    fn = createHandler(op);
    handlerCache.set(key, fn);
  }

  return fn;
}

type ErrorResponseData = {
  message?: string;
  stackTrace?: string;
};

type HttpErrorCause = {
  response?: {
    data?: ErrorResponseData;
  };
};

function extractErrorInfo(error: unknown): {
  message?: string;
  description?: string;
  stacktrace?: string;
} {
  if (error instanceof NodeApiError) {
    const cause = error.cause;

    if (typeof cause === 'object' && cause !== null) {
      const httpCause = cause as HttpErrorCause;
      const data = httpCause.response?.data;

      return {
        message: error.message,
        description: error.description ?? undefined,
        stacktrace: data?.stackTrace,
      };
    }

    return {
      message: error.message,
      description: error.description ?? undefined,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      stacktrace: error.stack,
    };
  }

  return {};
}
