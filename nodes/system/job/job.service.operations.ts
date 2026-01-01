/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function jobRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/job/job`,
    
  };
  return request.call(this, options);
}

export async function jobDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/job/job/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function jobReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/job/job/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
