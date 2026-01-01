import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'MailerConfigCreate', value: 'mailerConfigCreate' },
    { name: 'MailerConfigDelete', value: 'mailerConfigDelete' },
    { name: 'MailerConfigRead', value: 'mailerConfigRead' },
    { name: 'MailerConfigReadById', value: 'mailerConfigReadById' },
    { name: 'MailerConfigUpdate', value: 'mailerConfigUpdate' },
    { name: 'MessageOpSend', value: 'messageOpSend' }
  ],
  default: 'mailerConfigCreate',
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
