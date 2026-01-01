import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './mail.service.operations';
import { operations, fields } from './mail.service.fields';

export class MailService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'MailService',
    description: 'MailService operations',
    name: 'mailService',
    icon: 'file:mail.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'MailService' },
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
