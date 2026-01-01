/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function companyCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/company/company`,
    body
  };
  return request.call(this, options);
}

export async function companyRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/company/company`,
    
  };
  return request.call(this, options);
}

export async function companyUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/company/company`,
    body
  };
  return request.call(this, options);
}

export async function companyDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/company/company/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function companyReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/company/company/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function companyOpGetActive(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/catalog/company/companyOpGetActive`,
    
  };
  return request.call(this, options);
}

export async function companyOpSetActive(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/catalog/company/companyOpSetActive/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function societyCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/company/society`,
    body
  };
  return request.call(this, options);
}

export async function societyRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/company/society`,
    
  };
  return request.call(this, options);
}

export async function societyUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/company/society`,
    body
  };
  return request.call(this, options);
}

export async function societyDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/company/society/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function societyReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/company/society/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
