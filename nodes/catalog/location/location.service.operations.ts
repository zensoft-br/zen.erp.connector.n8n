/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function cityCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/location/city`,
    body
  };
  return request.call(this, options);
}

export async function cityRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/location/city`,
    
  };
  return request.call(this, options);
}

export async function cityUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/location/city`,
    body
  };
  return request.call(this, options);
}

export async function cityDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/location/city/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function cityReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/location/city/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function cityOpFind(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/location/cityOpFind`,
    body
  };
  return request.call(this, options);
}

export async function countryCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/location/country`,
    body
  };
  return request.call(this, options);
}

export async function countryRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/location/country`,
    
  };
  return request.call(this, options);
}

export async function countryUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/location/country`,
    body
  };
  return request.call(this, options);
}

export async function countryDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/location/country/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function countryReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/location/country/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function geocodeRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/location/geocode`,
    
  };
  return request.call(this, options);
}

export async function stateCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/location/state`,
    body
  };
  return request.call(this, options);
}

export async function stateRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/location/state`,
    
  };
  return request.call(this, options);
}

export async function stateUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/location/state`,
    body
  };
  return request.call(this, options);
}

export async function stateDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/location/state/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function stateReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/location/state/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function zipcodeRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/location/zipcode`,
    
  };
  return request.call(this, options);
}
