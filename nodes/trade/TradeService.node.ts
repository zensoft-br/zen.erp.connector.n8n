import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './trade.service.operations';
import { operations, fields } from './trade.service.fields';

export class TradeService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'TradeService',
    description: 'TradeService operations',
    name: 'tradeService',
    icon: 'file:trade.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'TradeService' },
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
