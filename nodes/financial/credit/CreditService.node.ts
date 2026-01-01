import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './credit.service.operations';
import { operations, fields } from './credit.service.fields';

export class CreditService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'CreditService',
    description: 'CreditService operations',
    name: 'creditService',
    icon: 'file:credit.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'CreditService' },
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
