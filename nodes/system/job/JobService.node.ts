import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './job.service.operations';
import { operations, fields } from './job.service.fields';

export class JobService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'JobService',
    description: 'JobService operations',
    name: 'jobService',
    icon: 'file:job.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'JobService' },
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
