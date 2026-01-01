/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function accountStatementCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/treasury/accountStatement`,
    body
  };
  return request.call(this, options);
}

export async function accountStatementRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/treasury/accountStatement`,
    
  };
  return request.call(this, options);
}

export async function accountStatementUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/treasury/accountStatement`,
    body
  };
  return request.call(this, options);
}

export async function accountStatementDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/treasury/accountStatement/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountStatementReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/treasury/accountStatement/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountStatementOpConsolidate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/treasury/accountStatementOpConsolidate/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function accountStatementOpConsolidateRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/treasury/accountStatementOpConsolidateRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountStatementOpIdentify(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/treasury/accountStatementOpIdentify/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountStatementOpIdentifyRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/treasury/accountStatementOpIdentifyRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountStatementOpIgnore(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/treasury/accountStatementOpIgnore/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountStatementOpIgnoreRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/treasury/accountStatementOpIgnoreRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountStatementOpSettle(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/treasury/accountStatementOpSettle/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function accountStatementOpSettleRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/treasury/accountStatementOpSettleRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function expenseOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/treasury/expenseOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function revenueOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/treasury/revenueOpCreate`,
    body
  };
  return request.call(this, options);
}
