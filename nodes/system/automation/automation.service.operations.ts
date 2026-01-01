/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function agentCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/automation/agent`,
    body
  };
  return request.call(this, options);
}

export async function agentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/automation/agent`,
    
  };
  return request.call(this, options);
}

export async function agentUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/automation/agent`,
    body
  };
  return request.call(this, options);
}

export async function agentDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/automation/agent/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function agentReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/automation/agent/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function agentOpExecute(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/automation/agentOpExecute/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function scheduleCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/automation/schedule`,
    body
  };
  return request.call(this, options);
}

export async function scheduleRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/automation/schedule`,
    
  };
  return request.call(this, options);
}

export async function scheduleUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/automation/schedule`,
    body
  };
  return request.call(this, options);
}

export async function scheduleDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/automation/schedule/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function scheduleReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/automation/schedule/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function scheduleOpExecute(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/automation/scheduleOpExecute/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function watcherCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/automation/watcher`,
    body
  };
  return request.call(this, options);
}

export async function watcherRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/automation/watcher`,
    
  };
  return request.call(this, options);
}

export async function watcherUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/automation/watcher`,
    body
  };
  return request.call(this, options);
}

export async function watcherDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/automation/watcher/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function watcherReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/automation/watcher/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
