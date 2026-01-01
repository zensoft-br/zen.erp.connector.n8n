/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function injectsRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/frontend/injects`,
    
  };
  return request.call(this, options);
}

export async function injectsUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/frontend/injects`,
    body
  };
  return request.call(this, options);
}

export async function menuRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/frontend/menu`,
    
  };
  return request.call(this, options);
}

export async function menuUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/frontend/menu`,
    body
  };
  return request.call(this, options);
}

export async function resourcesRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/frontend/resources`,
    
  };
  return request.call(this, options);
}

export async function resourcesUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/frontend/resources`,
    body
  };
  return request.call(this, options);
}
