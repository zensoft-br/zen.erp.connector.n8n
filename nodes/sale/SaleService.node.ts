import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './sale.service.operations';
import { operations, fields } from './sale.service.fields';

export class SaleService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'SaleService',
    description: 'SaleService operations',
    name: 'saleService',
    icon: 'file:sale.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'SaleService' },
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
