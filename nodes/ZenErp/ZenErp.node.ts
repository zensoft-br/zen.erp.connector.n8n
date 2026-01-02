import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';
import { operations } from './zenErp.operations';
import { properties } from './zenErp.fields';

export class ZenErp implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Zen ERP',
    description: 'Zen ERP connector node',
    name: 'zenErp',
    icon: 'file:zenErp.svg',
    group: ['transform'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'Zen ERP' },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [{ name: 'zenApi', required: true }],
    properties,
  };

  async execute(this: IExecuteFunctions) {
    const items = this.getInputData();
    const out = [];

    for (let i = 0; i < items.length; i++) {
      const module = this.getNodeParameter('module', i) as string;
      const operation = this.getNodeParameter('operation', i) as string;
      const fn = operations[module]?.[operation];

      if (!fn) {
        throw new NodeOperationError(
          this.getNode(),
          `Invalid operation: ${module} / ${operation}`,
          { itemIndex: i },
        );
      }

      const res = await fn.call(this, i);
      if (Array.isArray(res)) out.push(...res);
      else if (res) out.push(res);
    }

    return [out];
  }
}
