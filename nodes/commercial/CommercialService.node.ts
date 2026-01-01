import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './commercial.service.operations';
import { operations, fields } from './commercial.service.fields';

export class CommercialService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'CommercialService',
    description: 'CommercialService operations',
    name: 'commercialService',
    icon: 'file:commercial.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'CommercialService' },
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
