import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'TaxCreate', value: 'taxCreate' },
    { name: 'TaxDelete', value: 'taxDelete' },
    { name: 'TaxOpReadByCode', value: 'taxOpReadByCode' },
    { name: 'TaxRead', value: 'taxRead' },
    { name: 'TaxReadById', value: 'taxReadById' },
    { name: 'TaxUpdate', value: 'taxUpdate' },
    { name: 'TaxationCreate', value: 'taxationCreate' },
    { name: 'TaxationDelete', value: 'taxationDelete' },
    { name: 'TaxationOperationCreate', value: 'taxationOperationCreate' },
    { name: 'TaxationOperationDelete', value: 'taxationOperationDelete' },
    { name: 'TaxationOperationOpReadByCode', value: 'taxationOperationOpReadByCode' },
    { name: 'TaxationOperationRead', value: 'taxationOperationRead' },
    { name: 'TaxationOperationReadById', value: 'taxationOperationReadById' },
    { name: 'TaxationOperationUpdate', value: 'taxationOperationUpdate' },
    { name: 'TaxationRead', value: 'taxationRead' },
    { name: 'TaxationReadById', value: 'taxationReadById' },
    { name: 'TaxationRuleCreate', value: 'taxationRuleCreate' },
    { name: 'TaxationRuleDelete', value: 'taxationRuleDelete' },
    { name: 'TaxationRuleRead', value: 'taxationRuleRead' },
    { name: 'TaxationRuleReadById', value: 'taxationRuleReadById' },
    { name: 'TaxationRuleUpdate', value: 'taxationRuleUpdate' },
    { name: 'TaxationUpdate', value: 'taxationUpdate' }
  ],
  default: 'taxCreate',
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
