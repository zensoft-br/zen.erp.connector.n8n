import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'SalesCommissionCreate', value: 'salesCommissionCreate' },
    { name: 'SalesCommissionDelete', value: 'salesCommissionDelete' },
    { name: 'SalesCommissionOpApprove', value: 'salesCommissionOpApprove' },
    { name: 'SalesCommissionOpApproveRevert', value: 'salesCommissionOpApproveRevert' },
    { name: 'SalesCommissionOpCalculate', value: 'salesCommissionOpCalculate' },
    { name: 'SalesCommissionOpCalculateRevert', value: 'salesCommissionOpCalculateRevert' },
    { name: 'SalesCommissionOpPrepare', value: 'salesCommissionOpPrepare' },
    { name: 'SalesCommissionOpPrepareRevert', value: 'salesCommissionOpPrepareRevert' },
    { name: 'SalesCommissionOpPublish', value: 'salesCommissionOpPublish' },
    { name: 'SalesCommissionOpPublishRevert', value: 'salesCommissionOpPublishRevert' },
    { name: 'SalesCommissionRead', value: 'salesCommissionRead' },
    { name: 'SalesCommissionReadById', value: 'salesCommissionReadById' },
    { name: 'SalesCommissionUpdate', value: 'salesCommissionUpdate' }
  ],
  default: 'salesCommissionCreate',
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
