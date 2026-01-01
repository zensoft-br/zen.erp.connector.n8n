/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../transport/request';

export async function shippingCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/logistic/shipping`,
    body
  };
  return request.call(this, options);
}

export async function shippingRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/logistic/shipping`,
    
  };
  return request.call(this, options);
}

export async function shippingUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/logistic/shipping`,
    body
  };
  return request.call(this, options);
}

export async function shippingDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/logistic/shipping/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shippingReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/logistic/shipping/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shippingItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/logistic/shippingItem`,
    body
  };
  return request.call(this, options);
}

export async function shippingItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/logistic/shippingItem`,
    
  };
  return request.call(this, options);
}

export async function shippingItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/logistic/shippingItem`,
    body
  };
  return request.call(this, options);
}

export async function shippingItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/logistic/shippingItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shippingItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/logistic/shippingItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shippingOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/logistic/shippingOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
