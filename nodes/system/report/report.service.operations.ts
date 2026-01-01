/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function reportCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/report/report`,
    body
  };
  return request.call(this, options);
}

export async function reportRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/report/report`,
    
  };
  return request.call(this, options);
}

export async function reportUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/report/report`,
    body
  };
  return request.call(this, options);
}

export async function reportDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/report/report/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reportReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/report/report/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reportOpClone(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/report/reportOpClone/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reportOpGenerate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/report/reportOpGenerate`,
    body
  };
  return request.call(this, options);
}

export async function reportOpPrint(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/report/reportOpPrint`,
    body
  };
  return request.call(this, options);
}

export async function reportTemplateRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/report/reportTemplate`,
    
  };
  return request.call(this, options);
}

export async function reportTemplateReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/report/reportTemplate/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reportTemplateOpUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/report/reportTemplateOpUpdate/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}
