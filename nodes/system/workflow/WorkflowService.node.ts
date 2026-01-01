import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './workflow.service.operations';
import { operations, fields } from './workflow.service.fields';

export class WorkflowService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'WorkflowService',
    description: 'WorkflowService operations',
    name: 'workflowService',
    icon: 'file:workflow.service.svg',
    group: ['transform'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'WorkflowService' },
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
