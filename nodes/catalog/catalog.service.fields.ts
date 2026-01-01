import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'CategoryCreate', value: 'categoryCreate' },
    { name: 'CategoryDelete', value: 'categoryDelete' },
    { name: 'CategoryRead', value: 'categoryRead' },
    { name: 'CategoryReadById', value: 'categoryReadById' },
    { name: 'CategoryUpdate', value: 'categoryUpdate' }
  ],
  default: 'categoryCreate',
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
