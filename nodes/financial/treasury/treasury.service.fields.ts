import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'AccountStatementCreate', value: 'accountStatementCreate' },
    { name: 'AccountStatementDelete', value: 'accountStatementDelete' },
    { name: 'AccountStatementOpConsolidate', value: 'accountStatementOpConsolidate' },
    { name: 'AccountStatementOpConsolidateRevert', value: 'accountStatementOpConsolidateRevert' },
    { name: 'AccountStatementOpIdentify', value: 'accountStatementOpIdentify' },
    { name: 'AccountStatementOpIdentifyRevert', value: 'accountStatementOpIdentifyRevert' },
    { name: 'AccountStatementOpIgnore', value: 'accountStatementOpIgnore' },
    { name: 'AccountStatementOpIgnoreRevert', value: 'accountStatementOpIgnoreRevert' },
    { name: 'AccountStatementOpSettle', value: 'accountStatementOpSettle' },
    { name: 'AccountStatementOpSettleRevert', value: 'accountStatementOpSettleRevert' },
    { name: 'AccountStatementRead', value: 'accountStatementRead' },
    { name: 'AccountStatementReadById', value: 'accountStatementReadById' },
    { name: 'AccountStatementUpdate', value: 'accountStatementUpdate' },
    { name: 'ExpenseOpCreate', value: 'expenseOpCreate' },
    { name: 'RevenueOpCreate', value: 'revenueOpCreate' }
  ],
  default: 'accountStatementCreate',
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
