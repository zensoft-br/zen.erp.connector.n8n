import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './fiscal.service.operations';
import { operations, fields } from './fiscal.service.fields';

export class FiscalService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'FiscalService',
    description: 'FiscalService operations',
    name: 'fiscalService',
    icon: 'file:fiscal.service.svg',
    group: ['transform'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'FiscalService' },
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
