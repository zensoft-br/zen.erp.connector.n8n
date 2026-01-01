import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './security.service.operations';
import { operations, fields } from './security.service.fields';

export class SecurityService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'SecurityService',
    description: 'SecurityService operations',
    name: 'securityService',
    icon: 'file:security.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'SecurityService' },
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
