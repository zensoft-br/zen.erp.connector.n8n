/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../transport/request';

export async function priceFormationCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/priceFormation`,
    body
  };
  return request.call(this, options);
}

export async function priceFormationRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/priceFormation`,
    
  };
  return request.call(this, options);
}

export async function priceFormationUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/sale/priceFormation`,
    body
  };
  return request.call(this, options);
}

export async function priceFormationDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/sale/priceFormation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceFormationReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/priceFormation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceFormationItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/priceFormationItem`,
    body
  };
  return request.call(this, options);
}

export async function priceFormationItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/priceFormationItem`,
    
  };
  return request.call(this, options);
}

export async function priceFormationItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/sale/priceFormationItem`,
    body
  };
  return request.call(this, options);
}

export async function priceFormationItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/sale/priceFormationItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceFormationItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/priceFormationItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceFormationOpCalculate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/priceFormationOpCalculate/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function priceFormationOpClone(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/priceFormationOpClone/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceFormationOpSimulation(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/priceFormationOpSimulation/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function priceListCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/priceList`,
    body
  };
  return request.call(this, options);
}

export async function priceListRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/priceList`,
    
  };
  return request.call(this, options);
}

export async function priceListUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/sale/priceList`,
    body
  };
  return request.call(this, options);
}

export async function priceListDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/sale/priceList/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceListReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/priceList/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceListItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/priceListItem`,
    body
  };
  return request.call(this, options);
}

export async function priceListItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/priceListItem`,
    
  };
  return request.call(this, options);
}

export async function priceListItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/sale/priceListItem`,
    body
  };
  return request.call(this, options);
}

export async function priceListItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/sale/priceListItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function priceListItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/priceListItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/quote`,
    body
  };
  return request.call(this, options);
}

export async function quoteRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/quote`,
    
  };
  return request.call(this, options);
}

export async function quoteUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/sale/quote`,
    body
  };
  return request.call(this, options);
}

export async function quoteDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/sale/quote/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/quote/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteItem`,
    body
  };
  return request.call(this, options);
}

export async function quoteItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/quoteItem`,
    
  };
  return request.call(this, options);
}

export async function quoteItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/sale/quoteItem`,
    body
  };
  return request.call(this, options);
}

export async function quoteItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/sale/quoteItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/quoteItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteItemOpReject(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteItemOpReject/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteItemOpRejectRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteItemOpRejectRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteItemProposalCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteItemProposal`,
    body
  };
  return request.call(this, options);
}

export async function quoteItemProposalRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/quoteItemProposal`,
    
  };
  return request.call(this, options);
}

export async function quoteItemProposalUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/sale/quoteItemProposal`,
    body
  };
  return request.call(this, options);
}

export async function quoteItemProposalDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/sale/quoteItemProposal/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteItemProposalReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/quoteItemProposal/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteItemProposalOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteItemProposalOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteItemProposalOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteItemProposalOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteItemProposalOpReject(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteItemProposalOpReject/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteItemProposalOpRejectRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteItemProposalOpRejectRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpCancel(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpCancel/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpCancelRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpCancelRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function quoteOpFill(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpFill/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpFillRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpFillRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpReject(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpReject/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpRejectRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpRejectRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpStart(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpStart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpStartRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpStartRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpSubmit(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpSubmit/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function quoteOpSubmitRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/quoteOpSubmitRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/sale`,
    body
  };
  return request.call(this, options);
}

export async function saleRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/sale`,
    
  };
  return request.call(this, options);
}

export async function saleUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/sale/sale`,
    body
  };
  return request.call(this, options);
}

export async function saleDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/sale/sale/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/sale/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/saleItem`,
    body
  };
  return request.call(this, options);
}

export async function saleItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/saleItem`,
    
  };
  return request.call(this, options);
}

export async function saleItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/sale/saleItem`,
    body
  };
  return request.call(this, options);
}

export async function saleItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/sale/saleItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/saleItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleItemOpUpdatePrepared(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/saleItemOpUpdatePrepared`,
    body
  };
  return request.call(this, options);
}

export async function saleOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleOpApproveUnconditionally(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpApproveUnconditionally/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleOpCancel(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpCancel/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function saleOpCancelRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpCancelRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleOpClone(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpClone/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function saleOpFinishRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpFinishRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleOpForwardAuto(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpForwardAuto/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function saleOpMerge(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpMerge`,
    body
  };
  return request.call(this, options);
}

export async function saleOpMergeRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpMergeRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleOpPickingOrderCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpPickingOrderCreate/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function saleOpPickingOrderCreateRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpPickingOrderCreateRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleOpShipmentAssign(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpShipmentAssign/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleOpShipmentAssignRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpShipmentAssignRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleOpSplit(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpSplit/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function saleOpTaxationCalc(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpTaxationCalc/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleOpUpdatePrepared(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/saleOpUpdatePrepared`,
    body
  };
  return request.call(this, options);
}

export async function salePaymentCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/salePayment`,
    body
  };
  return request.call(this, options);
}

export async function salePaymentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/salePayment`,
    
  };
  return request.call(this, options);
}

export async function salePaymentUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/sale/salePayment`,
    body
  };
  return request.call(this, options);
}

export async function salePaymentDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/sale/salePayment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function salePaymentReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/salePayment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleProfileCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/sale/saleProfile`,
    body
  };
  return request.call(this, options);
}

export async function saleProfileRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/saleProfile`,
    
  };
  return request.call(this, options);
}

export async function saleProfileUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/sale/saleProfile`,
    body
  };
  return request.call(this, options);
}

export async function saleProfileDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/sale/saleProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function saleProfileReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/sale/saleProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
