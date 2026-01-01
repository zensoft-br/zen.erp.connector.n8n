/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function creditLineCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/credit/creditLine`,
    body
  };
  return request.call(this, options);
}

export async function creditLineRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/credit/creditLine`,
    
  };
  return request.call(this, options);
}

export async function creditLineUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/credit/creditLine`,
    body
  };
  return request.call(this, options);
}

export async function creditLineDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/credit/creditLine/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function creditLineReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/credit/creditLine/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function creditLineItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/credit/creditLineItem`,
    body
  };
  return request.call(this, options);
}

export async function creditLineItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/credit/creditLineItem`,
    
  };
  return request.call(this, options);
}

export async function creditLineItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/credit/creditLineItem`,
    body
  };
  return request.call(this, options);
}

export async function creditLineItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/credit/creditLineItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function creditLineItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/credit/creditLineItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
