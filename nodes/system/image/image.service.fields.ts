import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'ImageCreate', value: 'imageCreate' },
    { name: 'ImageDelete', value: 'imageDelete' },
    { name: 'ImageRead', value: 'imageRead' },
    { name: 'ImageReadById', value: 'imageReadById' },
    { name: 'ImageUpdate', value: 'imageUpdate' }
  ],
  default: 'imageCreate',
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
