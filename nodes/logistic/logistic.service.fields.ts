import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'ShippingCreate', value: 'shippingCreate' },
    { name: 'ShippingDelete', value: 'shippingDelete' },
    { name: 'ShippingItemCreate', value: 'shippingItemCreate' },
    { name: 'ShippingItemDelete', value: 'shippingItemDelete' },
    { name: 'ShippingItemRead', value: 'shippingItemRead' },
    { name: 'ShippingItemReadById', value: 'shippingItemReadById' },
    { name: 'ShippingItemUpdate', value: 'shippingItemUpdate' },
    { name: 'ShippingOpApprove', value: 'shippingOpApprove' },
    { name: 'ShippingRead', value: 'shippingRead' },
    { name: 'ShippingReadById', value: 'shippingReadById' },
    { name: 'ShippingUpdate', value: 'shippingUpdate' }
  ],
  default: 'shippingCreate',
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
