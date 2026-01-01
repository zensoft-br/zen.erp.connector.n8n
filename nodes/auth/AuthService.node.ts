import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './auth.service.operations';
import { operations, fields } from './auth.service.fields';

export class AuthService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'AuthService',
    description: 'AuthService operations',
    name: 'authService',
    icon: 'file:auth.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'AuthService' },
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
