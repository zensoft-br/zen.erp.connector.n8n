/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../transport/request';

export async function categoryCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/category`,
    body
  };
  return request.call(this, options);
}

export async function categoryRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/category`,
    
  };
  return request.call(this, options);
}

export async function categoryUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/category`,
    body
  };
  return request.call(this, options);
}

export async function categoryDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/category/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function categoryReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/category/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
