/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../transport/request';

export async function shipmentCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipment`,
    body
  };
  return request.call(this, options);
}

export async function shipmentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/shipping/shipment`,
    
  };
  return request.call(this, options);
}

export async function shipmentUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/shipping/shipment`,
    body
  };
  return request.call(this, options);
}

export async function shipmentDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/shipping/shipment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/shipping/shipment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpCheckFinish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpCheckFinish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpCheckFinishRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpCheckFinishRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpCheckIgnore(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpCheckIgnore/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpCheckStart(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpCheckStart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpCheckStartRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpCheckStartRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpFinish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpFinish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpFinishRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpFinishRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpLoadIgnore(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpLoadIgnore/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpLoadStart(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpLoadStart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpLoadStartRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpLoadStartRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpLoadVolume(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpLoadVolume/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpOutgoingInvoiceBind(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpOutgoingInvoiceBind/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpOutgoingInvoiceBindRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpOutgoingInvoiceBindRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/shipping/shipmentOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
