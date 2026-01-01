import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './report.service.operations';
import { operations, fields } from './report.service.fields';

export class ReportService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'ReportService',
    description: 'ReportService operations',
    name: 'reportService',
    icon: 'file:report.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'ReportService' },
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
