import type { IExecuteFunctions, INodeProperties, INodeType, INodeTypeDescription } from 'n8n-workflow';
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
    outputs: ['main'],
    credentials: [{
      name: 'zenApi',
      required: true
    }],
    properties: fields,
  };

  async execute(this: IExecuteFunctions) {
    const items = this.getInputData();
    const out = [];

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

      const res = await fn.call(this, i);

      if (Array.isArray(res)) out.push(...res);
      else if (res) out.push(res);
    }

    return [out];
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