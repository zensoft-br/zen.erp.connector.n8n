/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function priceListCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/priceList`,
    body
  };
  return request.call(this, options);
}

export async function priceListRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/priceList`,
    
  };
  return request.call(this, options);
}

export async function priceListUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/purchase/priceList`,
    body
  };
  return request.call(this, options);
}

export async function priceListDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/purchase/priceList/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceListReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/priceList/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceListItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/priceListItem`,
    body
  };
  return request.call(this, options);
}

export async function priceListItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/priceListItem`,
    
  };
  return request.call(this, options);
}

export async function priceListItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/purchase/priceListItem`,
    body
  };
  return request.call(this, options);
}

export async function priceListItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/purchase/priceListItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceListItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/priceListItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function proposalCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/proposal`,
    body
  };
  return request.call(this, options);
}

export async function proposalRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/proposal`,
    
  };
  return request.call(this, options);
}

export async function proposalUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/purchase/proposal`,
    body
  };
  return request.call(this, options);
}

export async function proposalDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/purchase/proposal/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function proposalReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/proposal/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function proposalItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/proposalItem`,
    body
  };
  return request.call(this, options);
}

export async function proposalItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/proposalItem`,
    
  };
  return request.call(this, options);
}

export async function proposalItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/purchase/proposalItem`,
    body
  };
  return request.call(this, options);
}

export async function proposalItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/purchase/proposalItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function proposalItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/proposalItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function proposalItemOpApprove(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/proposalItemOpApprove/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function proposalItemOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/proposalItemOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function proposalItemOpDisapprove(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/proposalItemOpDisapprove/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function proposalItemOpDisapproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/proposalItemOpDisapproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function proposalOpCancel(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/proposalOpCancel/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function proposalOpCancelRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/proposalOpCancelRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function proposalOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/proposalOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function proposalOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/proposalOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function proposalRequestUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/purchase/proposalRequest`,
    body
  };
  return request.call(this, options);
}

export async function proposalRequestReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/proposalRequest/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchase`,
    body
  };
  return request.call(this, options);
}

export async function purchaseRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/purchase`,
    
  };
  return request.call(this, options);
}

export async function purchaseUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/purchase/purchase`,
    body
  };
  return request.call(this, options);
}

export async function purchaseDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/purchase/purchase/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/purchase/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseItem`,
    body
  };
  return request.call(this, options);
}

export async function purchaseItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/purchaseItem`,
    
  };
  return request.call(this, options);
}

export async function purchaseItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/purchase/purchaseItem`,
    body
  };
  return request.call(this, options);
}

export async function purchaseItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/purchase/purchaseItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/purchaseItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseOpApproveUnconditionally(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpApproveUnconditionally/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseOpCancel(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpCancel/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function purchaseOpCancelRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpCancelRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseOpClone(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpClone/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function purchaseOpFinish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpFinish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseOpFinishRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpFinishRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseOpMerge(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpMerge`,
    body
  };
  return request.call(this, options);
}

export async function purchaseOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseOpSplit(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpSplit/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function purchaseOpTaxationCalc(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpTaxationCalc/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseOpUpdatePrepared(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseOpUpdatePrepared`,
    body
  };
  return request.call(this, options);
}

export async function purchasePaymentCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchasePayment`,
    body
  };
  return request.call(this, options);
}

export async function purchasePaymentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/purchasePayment`,
    
  };
  return request.call(this, options);
}

export async function purchasePaymentUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/purchase/purchasePayment`,
    body
  };
  return request.call(this, options);
}

export async function purchasePaymentDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/purchase/purchasePayment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchasePaymentReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/purchasePayment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseProfileCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/purchaseProfile`,
    body
  };
  return request.call(this, options);
}

export async function purchaseProfileRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/purchaseProfile`,
    
  };
  return request.call(this, options);
}

export async function purchaseProfileUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/purchase/purchaseProfile`,
    body
  };
  return request.call(this, options);
}

export async function purchaseProfileDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/purchase/purchaseProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function purchaseProfileReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/purchaseProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/quote`,
    body
  };
  return request.call(this, options);
}

export async function quoteRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/quote`,
    
  };
  return request.call(this, options);
}

export async function quoteUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/purchase/quote`,
    body
  };
  return request.call(this, options);
}

export async function quoteDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/purchase/quote/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/quote/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/quoteItem`,
    body
  };
  return request.call(this, options);
}

export async function quoteItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/quoteItem`,
    
  };
  return request.call(this, options);
}

export async function quoteItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/purchase/quoteItem`,
    body
  };
  return request.call(this, options);
}

export async function quoteItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/purchase/quoteItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/purchase/quoteItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/quoteOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/quoteOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpCancel(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/quoteOpCancel/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpCancelRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/quoteOpCancelRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/quoteOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function quoteOpFinish(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/quoteOpFinish/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function quoteOpFinishRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/quoteOpFinishRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/quoteOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/purchase/quoteOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
