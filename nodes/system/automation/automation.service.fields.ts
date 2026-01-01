import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'AgentCreate', value: 'agentCreate' },
    { name: 'AgentDelete', value: 'agentDelete' },
    { name: 'AgentOpExecute', value: 'agentOpExecute' },
    { name: 'AgentRead', value: 'agentRead' },
    { name: 'AgentReadById', value: 'agentReadById' },
    { name: 'AgentUpdate', value: 'agentUpdate' },
    { name: 'ScheduleCreate', value: 'scheduleCreate' },
    { name: 'ScheduleDelete', value: 'scheduleDelete' },
    { name: 'ScheduleOpExecute', value: 'scheduleOpExecute' },
    { name: 'ScheduleRead', value: 'scheduleRead' },
    { name: 'ScheduleReadById', value: 'scheduleReadById' },
    { name: 'ScheduleUpdate', value: 'scheduleUpdate' },
    { name: 'WatcherCreate', value: 'watcherCreate' },
    { name: 'WatcherDelete', value: 'watcherDelete' },
    { name: 'WatcherRead', value: 'watcherRead' },
    { name: 'WatcherReadById', value: 'watcherReadById' },
    { name: 'WatcherUpdate', value: 'watcherUpdate' }
  ],
  default: 'agentCreate',
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
