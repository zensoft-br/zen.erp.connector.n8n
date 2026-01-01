import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'TargetCreate', value: 'targetCreate' },
    { name: 'TargetDelete', value: 'targetDelete' },
    { name: 'TargetGroupCreate', value: 'targetGroupCreate' },
    { name: 'TargetGroupDelete', value: 'targetGroupDelete' },
    { name: 'TargetGroupRead', value: 'targetGroupRead' },
    { name: 'TargetGroupReadById', value: 'targetGroupReadById' },
    { name: 'TargetGroupUpdate', value: 'targetGroupUpdate' },
    { name: 'TargetIntervalCreate', value: 'targetIntervalCreate' },
    { name: 'TargetIntervalDelete', value: 'targetIntervalDelete' },
    { name: 'TargetIntervalRead', value: 'targetIntervalRead' },
    { name: 'TargetIntervalReadById', value: 'targetIntervalReadById' },
    { name: 'TargetIntervalUpdate', value: 'targetIntervalUpdate' },
    { name: 'TargetPlanCreate', value: 'targetPlanCreate' },
    { name: 'TargetPlanDelete', value: 'targetPlanDelete' },
    { name: 'TargetPlanRead', value: 'targetPlanRead' },
    { name: 'TargetPlanReadById', value: 'targetPlanReadById' },
    { name: 'TargetPlanUpdate', value: 'targetPlanUpdate' },
    { name: 'TargetRead', value: 'targetRead' },
    { name: 'TargetReadById', value: 'targetReadById' },
    { name: 'TargetUpdate', value: 'targetUpdate' }
  ],
  default: 'targetCreate',
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
