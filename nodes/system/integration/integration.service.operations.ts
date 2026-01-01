/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function messageRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/integration/message`,
    
  };
  return request.call(this, options);
}

export async function messageDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/integration/message/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function messageReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/integration/message/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function messageOpPost(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/integration/messageOpPost`,
    body
  };
  return request.call(this, options);
}

export async function messageOpTransfer(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/integration/messageOpTransfer/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function queueCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/integration/queue`,
    body
  };
  return request.call(this, options);
}

export async function queueRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/integration/queue`,
    
  };
  return request.call(this, options);
}

export async function queueUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/integration/queue`,
    body
  };
  return request.call(this, options);
}

export async function queueDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/integration/queue/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function queueReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/integration/queue/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function queueOpDeleteExpiredMessages(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/integration/queueOpDeleteExpiredMessages`,
    
  };
  return request.call(this, options);
}

export async function queueOpReadMessage(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/integration/queueOpReadMessage`,
    body
  };
  return request.call(this, options);
}

export async function queueOpReadMessageTimeout(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/integration/queueOpReadMessageTimeout`,
    body
  };
  return request.call(this, options);
}

export async function subscriptionCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/integration/subscription`,
    body
  };
  return request.call(this, options);
}

export async function subscriptionRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/integration/subscription`,
    
  };
  return request.call(this, options);
}

export async function subscriptionUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/integration/subscription`,
    body
  };
  return request.call(this, options);
}

export async function subscriptionDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/integration/subscription/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function subscriptionReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/integration/subscription/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function topicCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/integration/topic`,
    body
  };
  return request.call(this, options);
}

export async function topicRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/integration/topic`,
    
  };
  return request.call(this, options);
}

export async function topicUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/integration/topic`,
    body
  };
  return request.call(this, options);
}

export async function topicDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/integration/topic/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function topicReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/integration/topic/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function topicOpPublish(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/integration/topicOpPublish`,
    body
  };
  return request.call(this, options);
}
