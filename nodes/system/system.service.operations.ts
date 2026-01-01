/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../transport/request';

export async function checkAuth(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/checkAuth`,
    
  };
  return request.call(this, options);
}

export async function customPropertiesOpSet(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/customPropertiesOpSet`,
    body
  };
  return request.call(this, options);
}

export async function customTagsOpSet(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/customTagsOpSet`,
    
  };
  return request.call(this, options);
}

export async function databaseOpOptimize(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/databaseOpOptimize`,
    
  };
  return request.call(this, options);
}

export async function infoRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/info`,
    
  };
  return request.call(this, options);
}

export async function lockOpAcquire(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/lockOpAcquire/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function lockOpExtend(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/lockOpExtend/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function lockOpRelease(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/lockOpRelease/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function resourcesRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/resources`,
    
  };
  return request.call(this, options);
}

export async function statusCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/status`,
    body
  };
  return request.call(this, options);
}

export async function statusRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/status`,
    
  };
  return request.call(this, options);
}

export async function statusUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/status`,
    body
  };
  return request.call(this, options);
}

export async function statusDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/status/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function statusReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/status/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function testCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/test`,
    body
  };
  return request.call(this, options);
}

export async function testRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/test`,
    
  };
  return request.call(this, options);
}
