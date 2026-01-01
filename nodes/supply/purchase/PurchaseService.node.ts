import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './purchase.service.operations';
import { operations, fields } from './purchase.service.fields';

export class PurchaseService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'PurchaseService',
    description: 'PurchaseService operations',
    name: 'purchaseService',
    icon: 'file:purchase.service.svg',
    group: ['transform'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'PurchaseService' },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
      ...operations,
      ...fields,
    ],
  };

  async execute(this: IExecuteFunctions) {
    const items = this.getInputData();
    const out = [];

    for (let i = 0; i < items.length; i++) {
      const op = this.getNodeParameter('operation', i) as keyof typeof ops;
      out.push(...await ops[op].call(this, i));
    }

    return [out];
  }
}
