/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../transport/request';

export async function addressCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/address`,
    body
  };
  return request.call(this, options);
}

export async function addressRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/address`,
    
  };
  return request.call(this, options);
}

export async function addressUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/address`,
    body
  };
  return request.call(this, options);
}

export async function addressDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/address/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function addressReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/address/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function addressProfileCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/addressProfile`,
    body
  };
  return request.call(this, options);
}

export async function addressProfileRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/addressProfile`,
    
  };
  return request.call(this, options);
}

export async function addressProfileUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/addressProfile`,
    body
  };
  return request.call(this, options);
}

export async function addressProfileDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/addressProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function addressProfileReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/addressProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function handlingUnitCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/handlingUnit`,
    body
  };
  return request.call(this, options);
}

export async function handlingUnitRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/handlingUnit`,
    
  };
  return request.call(this, options);
}

export async function handlingUnitUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/handlingUnit`,
    body
  };
  return request.call(this, options);
}

export async function handlingUnitDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/handlingUnit/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function handlingUnitReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/handlingUnit/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingListCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/incomingList`,
    body
  };
  return request.call(this, options);
}

export async function incomingListRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/incomingList`,
    
  };
  return request.call(this, options);
}

export async function incomingListUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/incomingList`,
    body
  };
  return request.call(this, options);
}

export async function incomingListDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/incomingList/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingListReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/incomingList/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingListItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/incomingListItem`,
    body
  };
  return request.call(this, options);
}

export async function incomingListItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/incomingListItem`,
    
  };
  return request.call(this, options);
}

export async function incomingListItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/incomingListItem`,
    body
  };
  return request.call(this, options);
}

export async function incomingListItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/incomingListItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingListItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/incomingListItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingListOpImportFromOutgoingList(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/incomingListOpImportFromOutgoingList/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function incomingListOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/incomingListOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function incomingListOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/incomingListOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/inventory`,
    body
  };
  return request.call(this, options);
}

export async function inventoryRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/inventory`,
    
  };
  return request.call(this, options);
}

export async function inventoryUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/inventory`,
    body
  };
  return request.call(this, options);
}

export async function inventoryDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/inventory/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/inventory/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryAdjustmentCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryAdjustment`,
    body
  };
  return request.call(this, options);
}

export async function inventoryAdjustmentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/inventoryAdjustment`,
    
  };
  return request.call(this, options);
}

export async function inventoryAdjustmentUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/inventoryAdjustment`,
    body
  };
  return request.call(this, options);
}

export async function inventoryAdjustmentDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/inventoryAdjustment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryAdjustmentReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/inventoryAdjustment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryAdjustmentOpCreate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryAdjustmentOpCreate/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryCheckCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryCheck`,
    body
  };
  return request.call(this, options);
}

export async function inventoryCheckRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/inventoryCheck`,
    
  };
  return request.call(this, options);
}

export async function inventoryCheckUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/inventoryCheck`,
    body
  };
  return request.call(this, options);
}

export async function inventoryCheckDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/inventoryCheck/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryCheckReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/inventoryCheck/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryOpFinish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryOpFinish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryOpFinishRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryOpFinishRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryOpProcess(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryOpProcess/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryOpProcessRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryOpProcessRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryOpStart(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryOpStart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryOpStartRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryOpStartRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryProfileCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryProfile`,
    body
  };
  return request.call(this, options);
}

export async function inventoryProfileRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/inventoryProfile`,
    
  };
  return request.call(this, options);
}

export async function inventoryProfileUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/inventoryProfile`,
    body
  };
  return request.call(this, options);
}

export async function inventoryProfileDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/inventoryProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryProfileReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/inventoryProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryStockCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryStock`,
    body
  };
  return request.call(this, options);
}

export async function inventoryStockRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/inventoryStock`,
    
  };
  return request.call(this, options);
}

export async function inventoryStockUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/inventoryStock`,
    body
  };
  return request.call(this, options);
}

export async function inventoryStockDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/inventoryStock/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryStockReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/inventoryStock/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function inventoryStockOpCreate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/inventoryStockOpCreate/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function lotCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/lot`,
    body
  };
  return request.call(this, options);
}

export async function lotRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/lot`,
    
  };
  return request.call(this, options);
}

export async function lotUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/lot`,
    body
  };
  return request.call(this, options);
}

export async function lotDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/lot/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function lotReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/lot/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrder`,
    body
  };
  return request.call(this, options);
}

export async function movingOrderRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/movingOrder`,
    
  };
  return request.call(this, options);
}

export async function movingOrderUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/movingOrder`,
    body
  };
  return request.call(this, options);
}

export async function movingOrderDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/movingOrder/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/movingOrder/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/movingOrderItem`,
    
  };
  return request.call(this, options);
}

export async function movingOrderItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/movingOrderItem`,
    body
  };
  return request.call(this, options);
}

export async function movingOrderItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/movingOrderItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/movingOrderItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderItemOpFinish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrderItemOpFinish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderItemOpLoad(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrderItemOpLoad/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function movingOrderItemOpStart(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrderItemOpStart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderItemOpStartRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrderItemOpStartRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderOpAllocateStock(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrderOpAllocateStock/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function movingOrderOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrderOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrderOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderOpFinish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrderOpFinish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrderOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrderOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderOpStart(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrderOpStart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderOpStartRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrderOpStartRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function movingOrderOpUnload(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/movingOrderOpUnload/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingListRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/outgoingList`,
    
  };
  return request.call(this, options);
}

export async function outgoingListDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/outgoingList/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingListReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/outgoingList/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingListOpCreateFromReservation(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/outgoingListOpCreateFromReservation/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function outgoingListOpMerge(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/outgoingListOpMerge`,
    body
  };
  return request.call(this, options);
}

export async function outgoingListOpOutgoingInvoiceCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/outgoingListOpOutgoingInvoiceCreate/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function outgoingListOpOutgoingInvoiceCreateRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/outgoingListOpOutgoingInvoiceCreateRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingListOpPacked(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/outgoingListOpPacked/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingListOpPackedRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/outgoingListOpPackedRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function outgoingListOpVolumeCreateAuto(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/outgoingListOpVolumeCreateAuto/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function pickingOrderCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrder`,
    body
  };
  return request.call(this, options);
}

export async function pickingOrderRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/pickingOrder`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/pickingOrder`,
    body
  };
  return request.call(this, options);
}

export async function pickingOrderDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/pickingOrder/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/pickingOrder/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderItem`,
    body
  };
  return request.call(this, options);
}

export async function pickingOrderItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/pickingOrderItem`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/pickingOrderItem`,
    body
  };
  return request.call(this, options);
}

export async function pickingOrderItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/pickingOrderItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/pickingOrderItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function pickingOrderOpDistribute(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpDistribute/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpDistributeAuto(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpDistributeAuto/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpDistributeRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpDistributeRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpFinish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpFinish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpGroup(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpGroup`,
    body
  };
  return request.call(this, options);
}

export async function pickingOrderOpGroupRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpGroupRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpReservationFinish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpReservationFinish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpReservationFinishRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpReservationFinishRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpUngroup(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpUngroup/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpUngroupDivergent(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpUngroupDivergent/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingOrderOpUngroupRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/pickingOrderOpUngroupRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingProfileCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/pickingProfile`,
    body
  };
  return request.call(this, options);
}

export async function pickingProfileRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/pickingProfile`,
    
  };
  return request.call(this, options);
}

export async function pickingProfileUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/pickingProfile`,
    body
  };
  return request.call(this, options);
}

export async function pickingProfileDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/pickingProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function pickingProfileReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/pickingProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function qualityCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/quality`,
    body
  };
  return request.call(this, options);
}

export async function qualityRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/quality`,
    
  };
  return request.call(this, options);
}

export async function qualityUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/quality`,
    body
  };
  return request.call(this, options);
}

export async function qualityDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/quality/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function qualityReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/quality/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/reservation`,
    body
  };
  return request.call(this, options);
}

export async function reservationRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/reservation`,
    
  };
  return request.call(this, options);
}

export async function reservationUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/reservation`,
    body
  };
  return request.call(this, options);
}

export async function reservationDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/reservation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/reservation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/reservationItem`,
    
  };
  return request.call(this, options);
}

export async function reservationItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/reservationItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationOpAllocate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpAllocate/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function reservationOpAllocateAuto(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpAllocateAuto/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationOpAllocateAutoRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpAllocateAutoRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationOpAllocateRevert(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpAllocateRevert/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function reservationOpAllocateStock(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpAllocateStock/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationOpAllocateStockRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpAllocateStockRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function reservationOpFinish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpFinish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationOpFinishDivergent(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpFinishDivergent/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationOpFinishRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpFinishRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationOpStart(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpStart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationOpStartRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/reservationOpStartRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationTargetCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/reservationTarget`,
    body
  };
  return request.call(this, options);
}

export async function reservationTargetRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/reservationTarget`,
    
  };
  return request.call(this, options);
}

export async function reservationTargetUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/reservationTarget`,
    body
  };
  return request.call(this, options);
}

export async function reservationTargetDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/reservationTarget/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function reservationTargetReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/reservationTarget/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function serialCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/serial`,
    body
  };
  return request.call(this, options);
}

export async function serialRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/serial`,
    
  };
  return request.call(this, options);
}

export async function serialUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/serial`,
    body
  };
  return request.call(this, options);
}

export async function serialDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/serial/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function serialReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/serial/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function stockRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/stock`,
    
  };
  return request.call(this, options);
}

export async function stockReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/stock/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function stockAvailabilityRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/stockAvailability`,
    
  };
  return request.call(this, options);
}

export async function stockClusterCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/stockCluster`,
    body
  };
  return request.call(this, options);
}

export async function stockClusterRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/stockCluster`,
    
  };
  return request.call(this, options);
}

export async function stockClusterUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/stockCluster`,
    body
  };
  return request.call(this, options);
}

export async function stockClusterDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/stockCluster/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function stockClusterReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/stockCluster/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function stockManagementCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/stockManagement`,
    body
  };
  return request.call(this, options);
}

export async function stockManagementRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/stockManagement`,
    
  };
  return request.call(this, options);
}

export async function stockManagementUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/stockManagement`,
    body
  };
  return request.call(this, options);
}

export async function stockManagementDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/stockManagement/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function stockManagementReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/stockManagement/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function stockManagementItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/stockManagementItem`,
    body
  };
  return request.call(this, options);
}

export async function stockManagementItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/stockManagementItem`,
    
  };
  return request.call(this, options);
}

export async function stockManagementItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/stockManagementItem`,
    body
  };
  return request.call(this, options);
}

export async function stockManagementItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/stockManagementItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function stockManagementItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/stockManagementItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function stockManagementOpImport(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/stockManagementOpImport`,
    body
  };
  return request.call(this, options);
}

export async function stockManagementOpUpdateAverageDailyConsumption(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/stockManagementOpUpdateAverageDailyConsumption`,
    body
  };
  return request.call(this, options);
}

export async function stockOpBarcode(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/stockOpBarcode`,
    body
  };
  return request.call(this, options);
}

export async function stockOpCompensate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/stockOpCompensate`,
    body
  };
  return request.call(this, options);
}

export async function stockOpUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/stockOpUpdate/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function stockTransactionRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/stockTransaction`,
    
  };
  return request.call(this, options);
}

export async function stockTransactionReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/stockTransaction/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function stockTransactionOpRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/stockTransactionOpRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function volumeCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/volume`,
    body
  };
  return request.call(this, options);
}

export async function volumeRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/volume`,
    
  };
  return request.call(this, options);
}

export async function volumeUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/volume`,
    body
  };
  return request.call(this, options);
}

export async function volumeDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/volume/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function volumeReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/volume/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function volumeItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/volumeItem`,
    body
  };
  return request.call(this, options);
}

export async function volumeItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/volumeItem`,
    
  };
  return request.call(this, options);
}

export async function volumeItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/volumeItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function volumeItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/volumeItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function volumeOpCheck(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/volumeOpCheck/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function volumeOpCheckRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/volumeOpCheckRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function volumeOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/volumeOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function volumeOpHandlingUnitSet(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/material/volumeOpHandlingUnitSet/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function warehouseCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/material/warehouse`,
    body
  };
  return request.call(this, options);
}

export async function warehouseRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/warehouse`,
    
  };
  return request.call(this, options);
}

export async function warehouseUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/material/warehouse`,
    body
  };
  return request.call(this, options);
}

export async function warehouseDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/material/warehouse/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function warehouseReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/material/warehouse/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
