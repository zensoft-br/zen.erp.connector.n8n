/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../transport/request';

export async function clearanceCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/trade/clearance`,
    body
  };
  return request.call(this, options);
}

export async function clearanceRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/clearance`,
    
  };
  return request.call(this, options);
}

export async function clearanceUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/trade/clearance`,
    body
  };
  return request.call(this, options);
}

export async function clearanceDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/trade/clearance/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function clearanceReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/clearance/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function clearanceItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/trade/clearanceItem`,
    body
  };
  return request.call(this, options);
}

export async function clearanceItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/clearanceItem`,
    
  };
  return request.call(this, options);
}

export async function clearanceItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/trade/clearanceItem`,
    body
  };
  return request.call(this, options);
}

export async function clearanceItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/trade/clearanceItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function clearanceItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/clearanceItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function clearanceOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/clearanceOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function clearanceOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/clearanceOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function clearanceOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/clearanceOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function clearanceOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/clearanceOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/trade/contract`,
    body
  };
  return request.call(this, options);
}

export async function contractRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/contract`,
    
  };
  return request.call(this, options);
}

export async function contractUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/trade/contract`,
    body
  };
  return request.call(this, options);
}

export async function contractDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/trade/contract/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/contract/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/trade/contractItem`,
    body
  };
  return request.call(this, options);
}

export async function contractItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/contractItem`,
    
  };
  return request.call(this, options);
}

export async function contractItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/trade/contractItem`,
    body
  };
  return request.call(this, options);
}

export async function contractItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/trade/contractItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/contractItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/contractOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/contractOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/contractOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/contractOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractPaymentCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/trade/contractPayment`,
    body
  };
  return request.call(this, options);
}

export async function contractPaymentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/contractPayment`,
    
  };
  return request.call(this, options);
}

export async function contractPaymentUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/trade/contractPayment`,
    body
  };
  return request.call(this, options);
}

export async function contractPaymentDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/trade/contractPayment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractPaymentReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/contractPayment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractPaymentOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/contractPaymentOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractPaymentOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/contractPaymentOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractPaymentOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/contractPaymentOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function contractPaymentOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/contractPaymentOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function costCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/trade/cost`,
    body
  };
  return request.call(this, options);
}

export async function costRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/cost`,
    
  };
  return request.call(this, options);
}

export async function costUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/trade/cost`,
    body
  };
  return request.call(this, options);
}

export async function costDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/trade/cost/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function costReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/cost/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function costAllocationCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/trade/costAllocation`,
    body
  };
  return request.call(this, options);
}

export async function costAllocationRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/costAllocation`,
    
  };
  return request.call(this, options);
}

export async function costAllocationUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/trade/costAllocation`,
    body
  };
  return request.call(this, options);
}

export async function costAllocationDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/trade/costAllocation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function costAllocationReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/costAllocation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/trade/exchangeContract`,
    body
  };
  return request.call(this, options);
}

export async function exchangeContractRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/exchangeContract`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/trade/exchangeContract`,
    body
  };
  return request.call(this, options);
}

export async function exchangeContractDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/trade/exchangeContract/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/exchangeContract/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/exchangeContractOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/exchangeContractOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/exchangeContractOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/exchangeContractOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractPaymentCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/trade/exchangeContractPayment`,
    body
  };
  return request.call(this, options);
}

export async function exchangeContractPaymentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/exchangeContractPayment`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractPaymentUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/trade/exchangeContractPayment`,
    body
  };
  return request.call(this, options);
}

export async function exchangeContractPaymentDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/trade/exchangeContractPayment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractPaymentReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/exchangeContractPayment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractPaymentOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/exchangeContractPaymentOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractPaymentOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/exchangeContractPaymentOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractPaymentOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/exchangeContractPaymentOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractPaymentOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/exchangeContractPaymentOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractProfileCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/trade/exchangeContractProfile`,
    body
  };
  return request.call(this, options);
}

export async function exchangeContractProfileRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/exchangeContractProfile`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractProfileUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/trade/exchangeContractProfile`,
    body
  };
  return request.call(this, options);
}

export async function exchangeContractProfileDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/trade/exchangeContractProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function exchangeContractProfileReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/exchangeContractProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/trade/shipment`,
    body
  };
  return request.call(this, options);
}

export async function shipmentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/shipment`,
    
  };
  return request.call(this, options);
}

export async function shipmentUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/trade/shipment`,
    body
  };
  return request.call(this, options);
}

export async function shipmentDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/trade/shipment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/shipment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentContainerCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/trade/shipmentContainer`,
    body
  };
  return request.call(this, options);
}

export async function shipmentContainerRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/shipmentContainer`,
    
  };
  return request.call(this, options);
}

export async function shipmentContainerUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/trade/shipmentContainer`,
    body
  };
  return request.call(this, options);
}

export async function shipmentContainerDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/trade/shipmentContainer/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentContainerReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/shipmentContainer/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/trade/shipmentItem`,
    body
  };
  return request.call(this, options);
}

export async function shipmentItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/shipmentItem`,
    
  };
  return request.call(this, options);
}

export async function shipmentItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/trade/shipmentItem`,
    body
  };
  return request.call(this, options);
}

export async function shipmentItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/trade/shipmentItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/trade/shipmentItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/shipmentOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/shipmentOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/shipmentOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function shipmentOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/trade/shipmentOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
