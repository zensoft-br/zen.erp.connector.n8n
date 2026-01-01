/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../transport/request';

export async function login(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/auth/login`,
    body
  };
  return request.call(this, options);
}

export async function logout(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/auth/logout`,
    
  };
  return request.call(this, options);
}

export async function me(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/auth/me`,
    
  };
  return request.call(this, options);
}

export async function passwordRecover(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/auth/passwordRecover`,
    
  };
  return request.call(this, options);
}

export async function passwordReset(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/auth/passwordReset`,
    
  };
  return request.call(this, options);
}

export async function refresh(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/auth/refresh`,
    
  };
  return request.call(this, options);
}

export async function register(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/auth/register`,
    body
  };
  return request.call(this, options);
}
