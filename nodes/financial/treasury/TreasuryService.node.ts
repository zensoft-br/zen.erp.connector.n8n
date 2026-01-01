import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './treasury.service.operations';
import { operations, fields } from './treasury.service.fields';

export class TreasuryService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'TreasuryService',
    description: 'TreasuryService operations',
    name: 'treasuryService',
    icon: 'file:treasury.service.svg',
    group: ['transform'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'TreasuryService' },
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
