import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './accounting.service.operations';
import { operations, fields } from './accounting.service.fields';

export class AccountingService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'AccountingService',
    description: 'AccountingService operations',
    name: 'accountingService',
    icon: 'file:accounting.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'AccountingService' },
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
