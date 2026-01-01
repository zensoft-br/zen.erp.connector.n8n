import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './storage.service.operations';
import { operations, fields } from './storage.service.fields';

export class StorageService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'StorageService',
    description: 'StorageService operations',
    name: 'storageService',
    icon: 'file:storage.service.svg',
    group: ['transform'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'StorageService' },
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
