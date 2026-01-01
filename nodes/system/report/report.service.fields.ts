import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'ReportCreate', value: 'reportCreate' },
    { name: 'ReportDelete', value: 'reportDelete' },
    { name: 'ReportOpClone', value: 'reportOpClone' },
    { name: 'ReportOpGenerate', value: 'reportOpGenerate' },
    { name: 'ReportOpPrint', value: 'reportOpPrint' },
    { name: 'ReportRead', value: 'reportRead' },
    { name: 'ReportReadById', value: 'reportReadById' },
    { name: 'ReportTemplateOpUpdate', value: 'reportTemplateOpUpdate' },
    { name: 'ReportTemplateRead', value: 'reportTemplateRead' },
    { name: 'ReportTemplateReadById', value: 'reportTemplateReadById' },
    { name: 'ReportUpdate', value: 'reportUpdate' }
  ],
  default: 'reportCreate',
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
