import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'FileCreate', value: 'fileCreate' },
    { name: 'FileDelete', value: 'fileDelete' },
    { name: 'FileOpReadContent', value: 'fileOpReadContent' },
    { name: 'FileRead', value: 'fileRead' },
    { name: 'FileReadById', value: 'fileReadById' },
    { name: 'FileUpdate', value: 'fileUpdate' }
  ],
  default: 'fileCreate',
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
