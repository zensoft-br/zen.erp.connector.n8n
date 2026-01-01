import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'Get', value: 'get' },
    { name: 'GetNumber', value: 'getNumber' },
    { name: 'GetString', value: 'getString' },
    { name: 'Put', value: 'put' },
    { name: 'PutNumber', value: 'putNumber' },
    { name: 'PutString', value: 'putString' },
    { name: 'Remove', value: 'remove' },
    { name: 'UserGet', value: 'userGet' },
    { name: 'UserGetNumber', value: 'userGetNumber' },
    { name: 'UserGetString', value: 'userGetString' },
    { name: 'UserPut', value: 'userPut' },
    { name: 'UserPutNumber', value: 'userPutNumber' },
    { name: 'UserPutString', value: 'userPutString' },
    { name: 'UserRemove', value: 'userRemove' }
  ],
  default: 'get',
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
