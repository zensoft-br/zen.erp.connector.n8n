import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './frontend.service.operations';
import { operations, fields } from './frontend.service.fields';

export class FrontendService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'FrontendService',
    description: 'FrontendService operations',
    name: 'frontendService',
    icon: 'file:frontend.service.svg',
    group: ['transform'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'FrontendService' },
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
