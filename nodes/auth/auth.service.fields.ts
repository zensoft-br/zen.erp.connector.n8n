import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'Login', value: 'login' },
    { name: 'Logout', value: 'logout' },
    { name: 'Me', value: 'me' },
    { name: 'PasswordRecover', value: 'passwordRecover' },
    { name: 'PasswordReset', value: 'passwordReset' },
    { name: 'Refresh', value: 'refresh' },
    { name: 'Register', value: 'register' }
  ],
  default: 'login',
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
