/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function healthRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/info/health`,
    
  };
  return request.call(this, options);
}

export async function metricsRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/info/metrics`,
    
  };
  return request.call(this, options);
}
