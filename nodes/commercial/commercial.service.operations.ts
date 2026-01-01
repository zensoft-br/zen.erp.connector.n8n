/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../transport/request';

export async function personHierarchyCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/personHierarchy`,
    body
  };
  return request.call(this, options);
}

export async function personHierarchyRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/personHierarchy`,
    
  };
  return request.call(this, options);
}

export async function personHierarchyUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/commercial/personHierarchy`,
    body
  };
  return request.call(this, options);
}

export async function personHierarchyDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/commercial/personHierarchy/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personHierarchyReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/personHierarchy/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personHierarchyViewRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/personHierarchyView`,
    
  };
  return request.call(this, options);
}

export async function priceListChangeRequestCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/priceListChangeRequest`,
    body
  };
  return request.call(this, options);
}

export async function priceListChangeRequestRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/priceListChangeRequest`,
    
  };
  return request.call(this, options);
}

export async function priceListChangeRequestDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/commercial/priceListChangeRequest/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceListChangeRequestReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/priceListChangeRequest/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceListChangeRequestOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/priceListChangeRequestOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceListChangeRequestOpReject(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/priceListChangeRequestOpReject/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceListOpFind(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/priceListOpFind/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceListTransformationCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/priceListTransformation`,
    body
  };
  return request.call(this, options);
}

export async function priceListTransformationRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/priceListTransformation`,
    
  };
  return request.call(this, options);
}

export async function priceListTransformationUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/commercial/priceListTransformation`,
    body
  };
  return request.call(this, options);
}

export async function priceListTransformationDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/commercial/priceListTransformation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceListTransformationReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/priceListTransformation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceListTransformationOpCalculate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/priceListTransformationOpCalculate/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
