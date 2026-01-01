/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function contractCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contract`,
    body
  };
  return request.call(this, options);
}

export async function contractRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/contract/contract`,
    
  };
  return request.call(this, options);
}

export async function contractUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/commercial/contract/contract`,
    body
  };
  return request.call(this, options);
}

export async function contractDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/commercial/contract/contract/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/contract/contract/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractBillingCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractBilling`,
    body
  };
  return request.call(this, options);
}

export async function contractBillingRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/contract/contractBilling`,
    
  };
  return request.call(this, options);
}

export async function contractBillingUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/commercial/contract/contractBilling`,
    body
  };
  return request.call(this, options);
}

export async function contractBillingDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/commercial/contract/contractBilling/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractBillingReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/contract/contractBilling/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractBillingOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractBillingOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractBillingOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractBillingOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractBillingOpCreate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractBillingOpCreate`,
    
  };
  return request.call(this, options);
}

export async function contractBillingOpCreateInvoice(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractBillingOpCreateInvoice`,
    body
  };
  return request.call(this, options);
}

export async function contractBillingOpCreateInvoiceRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractBillingOpCreateInvoiceRevert`,
    
  };
  return request.call(this, options);
}

export async function contractBillingOpCreateRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractBillingOpCreateRevert`,
    
  };
  return request.call(this, options);
}

export async function contractBillingOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractBillingOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractBillingOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractBillingOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractIndexCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractIndex`,
    body
  };
  return request.call(this, options);
}

export async function contractIndexRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/contract/contractIndex`,
    
  };
  return request.call(this, options);
}

export async function contractIndexUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/commercial/contract/contractIndex`,
    body
  };
  return request.call(this, options);
}

export async function contractIndexDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/commercial/contract/contractIndex/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractIndexReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/contract/contractIndex/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractItem`,
    body
  };
  return request.call(this, options);
}

export async function contractItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/contract/contractItem`,
    
  };
  return request.call(this, options);
}

export async function contractItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/commercial/contract/contractItem`,
    body
  };
  return request.call(this, options);
}

export async function contractItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/commercial/contract/contractItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/contract/contractItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractOpAdjust(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractOpAdjust/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractOpCancel(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractOpCancel/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractOpCancelRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractOpCancelRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function contractOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractProfileCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/contract/contractProfile`,
    body
  };
  return request.call(this, options);
}

export async function contractProfileRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/contract/contractProfile`,
    
  };
  return request.call(this, options);
}

export async function contractProfileUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/commercial/contract/contractProfile`,
    body
  };
  return request.call(this, options);
}

export async function contractProfileDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/commercial/contract/contractProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractProfileReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/contract/contractProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
