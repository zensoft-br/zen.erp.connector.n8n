/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function dataSourceCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/data/dataSource`,
    body
  };
  return request.call(this, options);
}

export async function dataSourceRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/data/dataSource`,
    
  };
  return request.call(this, options);
}

export async function dataSourceUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/data/dataSource`,
    body
  };
  return request.call(this, options);
}

export async function dataSourceDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/data/dataSource/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dataSourceReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/data/dataSource/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dataSourceFieldRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/data/dataSourceField`,
    
  };
  return request.call(this, options);
}

export async function dataSourceFieldUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/data/dataSourceField`,
    body
  };
  return request.call(this, options);
}

export async function dataSourceFieldReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/data/dataSourceField/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dataSourceOpRead(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/data/dataSourceOpRead`,
    body
  };
  return request.call(this, options);
}

export async function dataSourceParameterCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/data/dataSourceParameter`,
    body
  };
  return request.call(this, options);
}

export async function dataSourceParameterRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/data/dataSourceParameter`,
    
  };
  return request.call(this, options);
}

export async function dataSourceParameterUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/data/dataSourceParameter`,
    body
  };
  return request.call(this, options);
}

export async function dataSourceParameterDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/data/dataSourceParameter/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dataSourceParameterReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/data/dataSourceParameter/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
