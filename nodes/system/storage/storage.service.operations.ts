/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function get(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/storage/get`,
    
  };
  return request.call(this, options);
}

export async function getNumber(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/storage/getNumber`,
    
  };
  return request.call(this, options);
}

export async function getString(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/storage/getString`,
    
  };
  return request.call(this, options);
}

export async function put(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/storage/put`,
    body
  };
  return request.call(this, options);
}

export async function putNumber(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'PUT' as const,
    path: `/system/storage/putNumber`,
    
  };
  return request.call(this, options);
}

export async function putString(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'PUT' as const,
    path: `/system/storage/putString`,
    
  };
  return request.call(this, options);
}

export async function remove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/storage/remove`,
    
  };
  return request.call(this, options);
}

export async function userGet(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/storage/userGet`,
    
  };
  return request.call(this, options);
}

export async function userGetNumber(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/storage/userGetNumber`,
    
  };
  return request.call(this, options);
}

export async function userGetString(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/storage/userGetString`,
    
  };
  return request.call(this, options);
}

export async function userPut(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/storage/userPut`,
    body
  };
  return request.call(this, options);
}

export async function userPutNumber(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'PUT' as const,
    path: `/system/storage/userPutNumber`,
    
  };
  return request.call(this, options);
}

export async function userPutString(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'PUT' as const,
    path: `/system/storage/userPutString`,
    
  };
  return request.call(this, options);
}

export async function userRemove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/storage/userRemove`,
    
  };
  return request.call(this, options);
}
