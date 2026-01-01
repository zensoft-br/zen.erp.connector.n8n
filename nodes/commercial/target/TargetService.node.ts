import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './target.service.operations';
import { operations, fields } from './target.service.fields';

export class TargetService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'TargetService',
    description: 'TargetService operations',
    name: 'targetService',
    icon: 'file:target.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'TargetService' },
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
