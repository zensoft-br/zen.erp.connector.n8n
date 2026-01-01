import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './person.service.operations';
import { operations, fields } from './person.service.fields';

export class PersonService implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'PersonService',
    description: 'PersonService operations',
    name: 'personService',
    icon: 'file:person.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'PersonService' },
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
