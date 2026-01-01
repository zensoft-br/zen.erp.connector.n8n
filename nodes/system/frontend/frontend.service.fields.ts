import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'InjectsRead', value: 'injectsRead' },
    { name: 'InjectsUpdate', value: 'injectsUpdate' },
    { name: 'MenuRead', value: 'menuRead' },
    { name: 'MenuUpdate', value: 'menuUpdate' },
    { name: 'ResourcesRead', value: 'resourcesRead' },
    { name: 'ResourcesUpdate', value: 'resourcesUpdate' }
  ],
  default: 'injectsRead',
}];

export const fields: INodeProperties[] = [
  {
    displayName: 'ID',
    name: 'id',
    type: 'number',
    default: null,
  },
  {
    displayName: 'Body',
    name: 'body',
    type: 'json',
    default: {},
  },
];
