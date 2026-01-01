import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'CreditLineCreate', value: 'creditLineCreate' },
    { name: 'CreditLineDelete', value: 'creditLineDelete' },
    { name: 'CreditLineItemCreate', value: 'creditLineItemCreate' },
    { name: 'CreditLineItemDelete', value: 'creditLineItemDelete' },
    { name: 'CreditLineItemRead', value: 'creditLineItemRead' },
    { name: 'CreditLineItemReadById', value: 'creditLineItemReadById' },
    { name: 'CreditLineItemUpdate', value: 'creditLineItemUpdate' },
    { name: 'CreditLineRead', value: 'creditLineRead' },
    { name: 'CreditLineReadById', value: 'creditLineReadById' },
    { name: 'CreditLineUpdate', value: 'creditLineUpdate' }
  ],
  default: 'creditLineCreate',
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
