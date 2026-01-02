import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';

import { operations } from './zenErp.operations';
import { properties } from './zenErp.fields';

export class ZenErp implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Zen ERP',
    description: 'Zen ERP connector node',
    name: 'zenErp',
    icon: 'file:zenErp.svg',
    group: ['transform'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'ZenErp' },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'zenApi',
        required: true,
      },
    ],    
    properties,
  };

  async execute(this: IExecuteFunctions) {
    const items = this.getInputData();
    const out = [];

    for (let i = 0; i < items.length; i++) {
      const moduleKey = this.getNodeParameter('module', i) as string;
      const opName = this.getNodeParameter('operation', i) as string;

      const fn = operations[moduleKey]?.[opName];

      if (!fn) {
        throw new NodeOperationError(
          this.getNode(),
          `Operação inválida: module="${moduleKey}" operation="${opName}"`,
          { itemIndex: i },
        );
      }

      const res = await fn.call(this, i);

      // n8n aceita array de items ou item único vindo do helper.
      // Preserva o comportamento do seu request() atual.
      if (Array.isArray(res)) {
        out.push(...res);
      } else if (res != null) {
        out.push(res);
      }
    }

    return [out];
  }
}
