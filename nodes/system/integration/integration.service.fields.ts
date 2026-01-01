import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'MessageDelete', value: 'messageDelete' },
    { name: 'MessageOpPost', value: 'messageOpPost' },
    { name: 'MessageOpTransfer', value: 'messageOpTransfer' },
    { name: 'MessageRead', value: 'messageRead' },
    { name: 'MessageReadById', value: 'messageReadById' },
    { name: 'QueueCreate', value: 'queueCreate' },
    { name: 'QueueDelete', value: 'queueDelete' },
    { name: 'QueueOpDeleteExpiredMessages', value: 'queueOpDeleteExpiredMessages' },
    { name: 'QueueOpReadMessage', value: 'queueOpReadMessage' },
    { name: 'QueueOpReadMessageTimeout', value: 'queueOpReadMessageTimeout' },
    { name: 'QueueRead', value: 'queueRead' },
    { name: 'QueueReadById', value: 'queueReadById' },
    { name: 'QueueUpdate', value: 'queueUpdate' },
    { name: 'SubscriptionCreate', value: 'subscriptionCreate' },
    { name: 'SubscriptionDelete', value: 'subscriptionDelete' },
    { name: 'SubscriptionRead', value: 'subscriptionRead' },
    { name: 'SubscriptionReadById', value: 'subscriptionReadById' },
    { name: 'SubscriptionUpdate', value: 'subscriptionUpdate' },
    { name: 'TopicCreate', value: 'topicCreate' },
    { name: 'TopicDelete', value: 'topicDelete' },
    { name: 'TopicOpPublish', value: 'topicOpPublish' },
    { name: 'TopicRead', value: 'topicRead' },
    { name: 'TopicReadById', value: 'topicReadById' },
    { name: 'TopicUpdate', value: 'topicUpdate' }
  ],
  default: 'messageDelete',
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
