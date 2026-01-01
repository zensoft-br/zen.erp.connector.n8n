/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function imageCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/image/image`,
    body
  };
  return request.call(this, options);
}

export async function imageRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/image/image`,
    
  };
  return request.call(this, options);
}

export async function imageUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/image/image`,
    body
  };
  return request.call(this, options);
}

export async function imageDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/image/image/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function imageReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/image/image/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
