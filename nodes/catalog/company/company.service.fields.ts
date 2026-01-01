import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'CompanyCreate', value: 'companyCreate' },
    { name: 'CompanyDelete', value: 'companyDelete' },
    { name: 'CompanyOpGetActive', value: 'companyOpGetActive' },
    { name: 'CompanyOpSetActive', value: 'companyOpSetActive' },
    { name: 'CompanyRead', value: 'companyRead' },
    { name: 'CompanyReadById', value: 'companyReadById' },
    { name: 'CompanyUpdate', value: 'companyUpdate' },
    { name: 'SocietyCreate', value: 'societyCreate' },
    { name: 'SocietyDelete', value: 'societyDelete' },
    { name: 'SocietyRead', value: 'societyRead' },
    { name: 'SocietyReadById', value: 'societyReadById' },
    { name: 'SocietyUpdate', value: 'societyUpdate' }
  ],
  default: 'companyCreate',
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
