/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function batchRequestCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchRequest`,
    body
  };
  return request.call(this, options);
}

export async function batchRequestRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/billing/batchRequest`,
    
  };
  return request.call(this, options);
}

export async function batchRequestUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/billing/batchRequest`,
    body
  };
  return request.call(this, options);
}

export async function batchRequestDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/billing/batchRequest/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchRequestReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/billing/batchRequest/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchRequestOpAddInstructions(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchRequestOpAddInstructions/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function batchRequestOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchRequestOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchRequestOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchRequestOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchRequestOpCreateFile(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchRequestOpCreateFile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchRequestOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchRequestOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchRequestOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchRequestOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchRequestOpSend(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchRequestOpSend/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchRequestOpSendRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchRequestOpSendRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchResponseRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/billing/batchResponse`,
    
  };
  return request.call(this, options);
}

export async function batchResponseDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/billing/batchResponse/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchResponseReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/billing/batchResponse/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchResponseOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchResponseOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchResponseOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchResponseOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchResponseOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchResponseOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function batchResponseOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchResponseOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchResponseOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchResponseOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function batchResponseOpProcess(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/batchResponseOpProcess/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function instructionRequestRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/billing/instructionRequest`,
    
  };
  return request.call(this, options);
}

export async function instructionRequestUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/billing/instructionRequest`,
    body
  };
  return request.call(this, options);
}

export async function instructionRequestDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/billing/instructionRequest/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function instructionRequestReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/billing/instructionRequest/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function instructionRequestOpAddToBatch(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/instructionRequestOpAddToBatch/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function instructionRequestOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/instructionRequestOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function instructionRequestOpCreateChangeDueDate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/instructionRequestOpCreateChangeDueDate`,
    
  };
  return request.call(this, options);
}

export async function instructionRequestOpCreateRegister(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/instructionRequestOpCreateRegister`,
    
  };
  return request.call(this, options);
}

export async function instructionRequestOpCreateUnregister(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/instructionRequestOpCreateUnregister`,
    
  };
  return request.call(this, options);
}

export async function instructionRequestOpRemoveFromBatch(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/instructionRequestOpRemoveFromBatch/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function instructionResponseCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/instructionResponse`,
    body
  };
  return request.call(this, options);
}

export async function instructionResponseRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/billing/instructionResponse`,
    
  };
  return request.call(this, options);
}

export async function instructionResponseUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/billing/instructionResponse`,
    body
  };
  return request.call(this, options);
}

export async function instructionResponseDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/billing/instructionResponse/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function instructionResponseReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/billing/instructionResponse/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function instructionResponseOpIgnore(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/instructionResponseOpIgnore/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function instructionResponseOpIgnoreRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/instructionResponseOpIgnoreRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function instructionResponseOpProcess(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/instructionResponseOpProcess/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function walletCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/wallet`,
    body
  };
  return request.call(this, options);
}

export async function walletRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/billing/wallet`,
    
  };
  return request.call(this, options);
}

export async function walletUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/billing/wallet`,
    body
  };
  return request.call(this, options);
}

export async function walletDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/billing/wallet/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function walletReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/billing/wallet/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function walletOpGetSequence(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/billing/walletOpGetSequence/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
