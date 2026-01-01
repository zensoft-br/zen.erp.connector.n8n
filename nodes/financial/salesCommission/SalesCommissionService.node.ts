import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './salesCommission.service.operations';
import { operations, fields } from './salesCommission.service.fields';

export class SalesCommissionService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'SalesCommissionService',
    description: 'SalesCommissionService operations',
    name: 'salesCommissionService',
    icon: 'file:salesCommission.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'SalesCommissionService' },
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
