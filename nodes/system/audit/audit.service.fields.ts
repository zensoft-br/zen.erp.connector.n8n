import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'LogCreate', value: 'logCreate' },
    { name: 'LogOpDeleteExpired', value: 'logOpDeleteExpired' },
    { name: 'LogRead', value: 'logRead' },
    { name: 'LogReadById', value: 'logReadById' },
    { name: 'SourceOpReadByEntity', value: 'sourceOpReadByEntity' },
    { name: 'SourceRead', value: 'sourceRead' },
    { name: 'SourceReadById', value: 'sourceReadById' },
    { name: 'UserLogCreate', value: 'userLogCreate' },
    { name: 'UserLogDelete', value: 'userLogDelete' },
    { name: 'UserLogRead', value: 'userLogRead' },
    { name: 'UserLogReadById', value: 'userLogReadById' },
    { name: 'UserLogUpdate', value: 'userLogUpdate' }
  ],
  default: 'logCreate',
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
