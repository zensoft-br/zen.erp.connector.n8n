/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function salesCommissionCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/salesCommission/salesCommission`,
    body
  };
  return request.call(this, options);
}

export async function salesCommissionRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/salesCommission/salesCommission`,
    
  };
  return request.call(this, options);
}

export async function salesCommissionUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/salesCommission/salesCommission`,
    body
  };
  return request.call(this, options);
}

export async function salesCommissionDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/salesCommission/salesCommission/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function salesCommissionReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/salesCommission/salesCommission/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function salesCommissionOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/salesCommission/salesCommissionOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function salesCommissionOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/salesCommission/salesCommissionOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function salesCommissionOpCalculate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/salesCommission/salesCommissionOpCalculate`,
    body
  };
  return request.call(this, options);
}

export async function salesCommissionOpCalculateRevert(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/salesCommission/salesCommissionOpCalculateRevert`,
    body
  };
  return request.call(this, options);
}

export async function salesCommissionOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/salesCommission/salesCommissionOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function salesCommissionOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/salesCommission/salesCommissionOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function salesCommissionOpPublish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/salesCommission/salesCommissionOpPublish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function salesCommissionOpPublishRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/salesCommission/salesCommissionOpPublishRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
