import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'CheckAuth', value: 'checkAuth' },
    { name: 'CustomPropertiesOpSet', value: 'customPropertiesOpSet' },
    { name: 'CustomTagsOpSet', value: 'customTagsOpSet' },
    { name: 'DatabaseOpOptimize', value: 'databaseOpOptimize' },
    { name: 'InfoRead', value: 'infoRead' },
    { name: 'LockOpAcquire', value: 'lockOpAcquire' },
    { name: 'LockOpExtend', value: 'lockOpExtend' },
    { name: 'LockOpRelease', value: 'lockOpRelease' },
    { name: 'ResourcesRead', value: 'resourcesRead' },
    { name: 'StatusCreate', value: 'statusCreate' },
    { name: 'StatusDelete', value: 'statusDelete' },
    { name: 'StatusRead', value: 'statusRead' },
    { name: 'StatusReadById', value: 'statusReadById' },
    { name: 'StatusUpdate', value: 'statusUpdate' },
    { name: 'TestCreate', value: 'testCreate' },
    { name: 'TestRead', value: 'testRead' }
  ],
  default: 'checkAuth',
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
