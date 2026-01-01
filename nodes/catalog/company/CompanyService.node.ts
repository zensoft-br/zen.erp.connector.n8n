import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './company.service.operations';
import { operations, fields } from './company.service.fields';

export class CompanyService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'CompanyService',
    description: 'CompanyService operations',
    name: 'companyService',
    icon: 'file:company.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'CompanyService' },
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
