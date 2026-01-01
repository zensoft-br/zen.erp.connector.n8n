import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './product.service.operations';
import { operations, fields } from './product.service.fields';

export class ProductService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'ProductService',
    description: 'ProductService operations',
    name: 'productService',
    icon: 'file:product.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'ProductService' },
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
