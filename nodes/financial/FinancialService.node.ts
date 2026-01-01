import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './financial.service.operations';
import { operations, fields } from './financial.service.fields';

export class FinancialService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'FinancialService',
    description: 'FinancialService operations',
    name: 'financialService',
    icon: 'file:financial.service.svg',
    group: ['transform'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'FinancialService' },
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
