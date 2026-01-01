/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function taxCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/taxation/tax`,
    body
  };
  return request.call(this, options);
}

export async function taxRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/taxation/tax`,
    
  };
  return request.call(this, options);
}

export async function taxUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/taxation/tax`,
    body
  };
  return request.call(this, options);
}

export async function taxDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/taxation/tax/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function taxReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/taxation/tax/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function taxOpReadByCode(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/taxation/taxOpReadByCode`,
    
  };
  return request.call(this, options);
}

export async function taxationCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/taxation/taxation`,
    body
  };
  return request.call(this, options);
}

export async function taxationRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/taxation/taxation`,
    
  };
  return request.call(this, options);
}

export async function taxationUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/taxation/taxation`,
    body
  };
  return request.call(this, options);
}

export async function taxationDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/taxation/taxation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function taxationReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/taxation/taxation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function taxationOperationCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/taxation/taxationOperation`,
    body
  };
  return request.call(this, options);
}

export async function taxationOperationRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/taxation/taxationOperation`,
    
  };
  return request.call(this, options);
}

export async function taxationOperationUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/taxation/taxationOperation`,
    body
  };
  return request.call(this, options);
}

export async function taxationOperationDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/taxation/taxationOperation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function taxationOperationReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/taxation/taxationOperation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function taxationOperationOpReadByCode(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/taxation/taxationOperationOpReadByCode`,
    
  };
  return request.call(this, options);
}

export async function taxationRuleCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/taxation/taxationRule`,
    body
  };
  return request.call(this, options);
}

export async function taxationRuleRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/taxation/taxationRule`,
    
  };
  return request.call(this, options);
}

export async function taxationRuleUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/taxation/taxationRule`,
    body
  };
  return request.call(this, options);
}

export async function taxationRuleDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/taxation/taxationRule/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function taxationRuleReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/taxation/taxationRule/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
