import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './billing.service.operations';
import { operations, fields } from './billing.service.fields';

export class BillingService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'BillingService',
    description: 'BillingService operations',
    name: 'billingService',
    icon: 'file:billing.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'BillingService' },
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
