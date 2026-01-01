/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../transport/request';

export async function fiscalProfileOperationCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/fiscalProfileOperation`,
    body
  };
  return request.call(this, options);
}

export async function fiscalProfileOperationRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/fiscalProfileOperation`,
    
  };
  return request.call(this, options);
}

export async function fiscalProfileOperationUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/fiscalProfileOperation`,
    body
  };
  return request.call(this, options);
}

export async function fiscalProfileOperationDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/fiscalProfileOperation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalProfileOperationReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/fiscalProfileOperation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalProfileOperationOpReadByCode(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/fiscalProfileOperationOpReadByCode`,
    
  };
  return request.call(this, options);
}

export async function fiscalProfilePersonCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/fiscalProfilePerson`,
    body
  };
  return request.call(this, options);
}

export async function fiscalProfilePersonRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/fiscalProfilePerson`,
    
  };
  return request.call(this, options);
}

export async function fiscalProfilePersonUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/fiscalProfilePerson`,
    body
  };
  return request.call(this, options);
}

export async function fiscalProfilePersonDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/fiscalProfilePerson/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalProfilePersonReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/fiscalProfilePerson/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalProfileProductCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/fiscalProfileProduct`,
    body
  };
  return request.call(this, options);
}

export async function fiscalProfileProductRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/fiscalProfileProduct`,
    
  };
  return request.call(this, options);
}

export async function fiscalProfileProductUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/fiscalProfileProduct`,
    body
  };
  return request.call(this, options);
}

export async function fiscalProfileProductDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/fiscalProfileProduct/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalProfileProductReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/fiscalProfileProduct/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalRegionCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/fiscalRegion`,
    body
  };
  return request.call(this, options);
}

export async function fiscalRegionRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/fiscalRegion`,
    
  };
  return request.call(this, options);
}

export async function fiscalRegionUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/fiscalRegion`,
    body
  };
  return request.call(this, options);
}

export async function fiscalRegionDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/fiscalRegion/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalRegionReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/fiscalRegion/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalRegionOpReadByCode(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/fiscalRegionOpReadByCode`,
    
  };
  return request.call(this, options);
}

export async function fiscalYearCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/fiscalYear`,
    body
  };
  return request.call(this, options);
}

export async function fiscalYearRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/fiscalYear`,
    
  };
  return request.call(this, options);
}

export async function fiscalYearUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/fiscalYear`,
    body
  };
  return request.call(this, options);
}

export async function fiscalYearDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/fiscalYear/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalYearReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/fiscalYear/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalYearOpPartialClosure(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/fiscalYearOpPartialClosure/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalYearOpPartialClosureRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/fiscalYearOpPartialClosureRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalYearOpPublish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/fiscalYearOpPublish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalYearOpPublishRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/fiscalYearOpPublishRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalYearOpRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/fiscalYearOpRead`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoice`,
    body
  };
  return request.call(this, options);
}

export async function incomingInvoiceRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/incomingInvoice`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/incomingInvoice`,
    body
  };
  return request.call(this, options);
}

export async function incomingInvoiceDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/incomingInvoice/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/incomingInvoice/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoiceItem`,
    body
  };
  return request.call(this, options);
}

export async function incomingInvoiceItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/incomingInvoiceItem`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/incomingInvoiceItem`,
    body
  };
  return request.call(this, options);
}

export async function incomingInvoiceItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/incomingInvoiceItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/incomingInvoiceItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoiceOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceOpApproveDivergences(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoiceOpApproveDivergences/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoiceOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoiceOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function incomingInvoiceOpCreateFromIncomingList(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoiceOpCreateFromIncomingList`,
    body
  };
  return request.call(this, options);
}

export async function incomingInvoiceOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoiceOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoiceOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceOpReject(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoiceOpReject/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceOpRejectRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoiceOpRejectRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceOpReturn(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoiceOpReturn/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function incomingInvoiceOpTaxationCalc(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoiceOpTaxationCalc/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoiceOpUpdatePrepared(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoiceOpUpdatePrepared`,
    body
  };
  return request.call(this, options);
}

export async function incomingInvoicePaymentCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/incomingInvoicePayment`,
    body
  };
  return request.call(this, options);
}

export async function incomingInvoicePaymentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/incomingInvoicePayment`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoicePaymentUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/incomingInvoicePayment`,
    body
  };
  return request.call(this, options);
}

export async function incomingInvoicePaymentDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/incomingInvoicePayment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingInvoicePaymentReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/incomingInvoicePayment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function invoiceItemAccountingCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/invoiceItemAccounting`,
    body
  };
  return request.call(this, options);
}

export async function invoiceItemAccountingRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/invoiceItemAccounting`,
    
  };
  return request.call(this, options);
}

export async function invoiceItemAccountingUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/invoiceItemAccounting`,
    body
  };
  return request.call(this, options);
}

export async function invoiceItemAccountingDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/invoiceItemAccounting/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function invoiceItemAccountingReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/invoiceItemAccounting/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function invoiceReferenceCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/invoiceReference`,
    body
  };
  return request.call(this, options);
}

export async function invoiceReferenceRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/invoiceReference`,
    
  };
  return request.call(this, options);
}

export async function invoiceReferenceUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/invoiceReference`,
    body
  };
  return request.call(this, options);
}

export async function invoiceReferenceDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/invoiceReference/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function invoiceReferenceReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/invoiceReference/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function invoiceSeriesCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/invoiceSeries`,
    body
  };
  return request.call(this, options);
}

export async function invoiceSeriesRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/invoiceSeries`,
    
  };
  return request.call(this, options);
}

export async function invoiceSeriesUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/invoiceSeries`,
    body
  };
  return request.call(this, options);
}

export async function invoiceSeriesDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/invoiceSeries/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function invoiceSeriesReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/invoiceSeries/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function invoiceSeriesOpGetNextNumber(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/invoiceSeriesOpGetNextNumber/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function invoiceSeriesOpUpdateLastNumber(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/invoiceSeriesOpUpdateLastNumber/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoiceCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoice`,
    body
  };
  return request.call(this, options);
}

export async function outgoingInvoiceRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/outgoingInvoice`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoiceUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/outgoingInvoice`,
    body
  };
  return request.call(this, options);
}

export async function outgoingInvoiceDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/outgoingInvoice/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoiceReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/outgoingInvoice/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoiceItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoiceItem`,
    body
  };
  return request.call(this, options);
}

export async function outgoingInvoiceItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/outgoingInvoiceItem`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoiceItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/outgoingInvoiceItem`,
    body
  };
  return request.call(this, options);
}

export async function outgoingInvoiceItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/outgoingInvoiceItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoiceItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/outgoingInvoiceItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoiceOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoiceOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoiceOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoiceOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoiceOpCancel(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoiceOpCancel/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function outgoingInvoiceOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoiceOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function outgoingInvoiceOpDiscount(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoiceOpDiscount/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function outgoingInvoiceOpOutgoingListBind(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoiceOpOutgoingListBind/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoiceOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoiceOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoiceOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoiceOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoiceOpReturn(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoiceOpReturn/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function outgoingInvoiceOpTaxationCalc(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoiceOpTaxationCalc/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoiceOpUpdatePrepared(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoiceOpUpdatePrepared`,
    body
  };
  return request.call(this, options);
}

export async function outgoingInvoicePaymentCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/outgoingInvoicePayment`,
    body
  };
  return request.call(this, options);
}

export async function outgoingInvoicePaymentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/outgoingInvoicePayment`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoicePaymentUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/fiscal/outgoingInvoicePayment`,
    body
  };
  return request.call(this, options);
}

export async function outgoingInvoicePaymentDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/outgoingInvoicePayment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingInvoicePaymentReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/outgoingInvoicePayment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
