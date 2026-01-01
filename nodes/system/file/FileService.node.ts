import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './file.service.operations';
import { operations, fields } from './file.service.fields';

export class FileService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'FileService',
    description: 'FileService operations',
    name: 'fileService',
    icon: 'file:file.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'FileService' },
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
