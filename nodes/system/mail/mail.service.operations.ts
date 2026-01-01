/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function mailerConfigCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/mail/mailerConfig`,
    body
  };
  return request.call(this, options);
}

export async function mailerConfigRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/mail/mailerConfig`,
    
  };
  return request.call(this, options);
}

export async function mailerConfigUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/mail/mailerConfig`,
    body
  };
  return request.call(this, options);
}

export async function mailerConfigDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/mail/mailerConfig/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function mailerConfigReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/mail/mailerConfig/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function messageOpSend(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/mail/messageOpSend`,
    body
  };
  return request.call(this, options);
}
