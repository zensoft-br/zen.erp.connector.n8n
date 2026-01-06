import type { IExecuteFunctions, INodeExecutionData, INodeProperties, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';
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
    outputs: ['main', 'main'],
    outputNames: ['success', 'error'],
    credentials: [{
      name: 'zenApi',
      required: true
    }],
    properties: fields,
  };

  async execute(this: IExecuteFunctions) {
    const items = this.getInputData();

    const success: INodeExecutionData[] = [];
    const error: INodeExecutionData[] = [];

    const normalizeResult = (
      res: unknown,
      itemIndex: number,
    ): INodeExecutionData[] => {
      if (!res) {
        return [{
          json: items[itemIndex].json,
          pairedItem: { item: itemIndex },
        }];
      }

      if (Array.isArray(res)) {
        return res.map(r => ({
          ...(r as INodeExecutionData),
          pairedItem: { item: itemIndex },
        }));
      }

      return [{
        ...(res as INodeExecutionData),
        pairedItem: { item: itemIndex },
      }];
    };

    for (let i = 0; i < items.length; i++) {
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

      const fn = getOperationHandler(target);

      try {
        const res = await fn.call(this, i);
        success.push(...normalizeResult(res, i));
      } catch (e: unknown) {
        const message = e instanceof Error
          ? e.message
          : 'Operation failed';

        error.push({
          json: {
            ...items[i].json,
            _error: { message },
          },
          pairedItem: { item: i },
        });
      }
    }

    return [success, error];
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