import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './audit.service.operations';
import { operations, fields } from './audit.service.fields';

export class AuditService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'AuditService',
    description: 'AuditService operations',
    name: 'auditService',
    icon: 'file:audit.service.svg',
    group: ['transform'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'AuditService' },
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
