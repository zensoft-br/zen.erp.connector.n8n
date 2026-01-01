import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'DataSourceCreate', value: 'dataSourceCreate' },
    { name: 'DataSourceDelete', value: 'dataSourceDelete' },
    { name: 'DataSourceFieldRead', value: 'dataSourceFieldRead' },
    { name: 'DataSourceFieldReadById', value: 'dataSourceFieldReadById' },
    { name: 'DataSourceFieldUpdate', value: 'dataSourceFieldUpdate' },
    { name: 'DataSourceOpRead', value: 'dataSourceOpRead' },
    { name: 'DataSourceParameterCreate', value: 'dataSourceParameterCreate' },
    { name: 'DataSourceParameterDelete', value: 'dataSourceParameterDelete' },
    { name: 'DataSourceParameterRead', value: 'dataSourceParameterRead' },
    { name: 'DataSourceParameterReadById', value: 'dataSourceParameterReadById' },
    { name: 'DataSourceParameterUpdate', value: 'dataSourceParameterUpdate' },
    { name: 'DataSourceRead', value: 'dataSourceRead' },
    { name: 'DataSourceReadById', value: 'dataSourceReadById' },
    { name: 'DataSourceUpdate', value: 'dataSourceUpdate' }
  ],
  default: 'dataSourceCreate',
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
