/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function logCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/audit/log`,
    body
  };
  return request.call(this, options);
}

export async function logRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/audit/log`,
    
  };
  return request.call(this, options);
}

export async function logReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/audit/log/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function logOpDeleteExpired(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/audit/logOpDeleteExpired`,
    
  };
  return request.call(this, options);
}

export async function sourceRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/audit/source`,
    
  };
  return request.call(this, options);
}

export async function sourceReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/audit/source/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function sourceOpReadByEntity(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/audit/sourceOpReadByEntity`,
    
  };
  return request.call(this, options);
}

export async function userLogCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/audit/userLog`,
    body
  };
  return request.call(this, options);
}

export async function userLogRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/audit/userLog`,
    
  };
  return request.call(this, options);
}

export async function userLogUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/audit/userLog`,
    body
  };
  return request.call(this, options);
}

export async function userLogDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/audit/userLog/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function userLogReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/audit/userLog/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
