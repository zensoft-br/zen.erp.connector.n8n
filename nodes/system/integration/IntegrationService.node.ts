import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './integration.service.operations';
import { operations, fields } from './integration.service.fields';

export class IntegrationService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'IntegrationService',
    description: 'IntegrationService operations',
    name: 'integrationService',
    icon: 'file:integration.service.svg',
    group: ['transform'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'IntegrationService' },
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
