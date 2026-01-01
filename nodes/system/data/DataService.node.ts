import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './data.service.operations';
import { operations, fields } from './data.service.fields';

export class DataService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'DataService',
    description: 'DataService operations',
    name: 'dataService',
    icon: 'file:data.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'DataService' },
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
