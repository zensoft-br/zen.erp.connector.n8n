/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function dfeRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfe`,
    
  };
  return request.call(this, options);
}

export async function dfeReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfe/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeNfeProcInCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeNfeProcIn`,
    body
  };
  return request.call(this, options);
}

export async function dfeNfeProcInRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeNfeProcIn`,
    
  };
  return request.call(this, options);
}

export async function dfeNfeProcInDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/br/dfeNfeProcIn/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeNfeProcInReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeNfeProcIn/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeNfeProcInOpIncomingInvoiceCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreate/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function dfeNfeProcInOpIncomingInvoiceCreateRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreateRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeNfeProcOutRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeNfeProcOut`,
    
  };
  return request.call(this, options);
}

export async function dfeNfeProcOutDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/fiscal/br/dfeNfeProcOut/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeNfeProcOutReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeNfeProcOut/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeNfeProcOutOpCancel(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeNfeProcOutOpCancel/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function dfeNfeProcOutOpConfirm(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeNfeProcOutOpConfirm/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeNfeProcOutOpCorrect(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeNfeProcOutOpCorrect/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function dfeNfeProcOutOpCreate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeNfeProcOutOpCreate`,
    
  };
  return request.call(this, options);
}

export async function dfeNfeProcOutOpDownload(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeNfeProcOutOpDownload`,
    body
  };
  return request.call(this, options);
}

export async function dfeNfeProcOutOpOutgoingInvoiceCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeNfeProcOutOpOutgoingInvoiceCreate/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function dfeNfeProcOutOpSign(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeNfeProcOutOpSign/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeNfeProcOutOpSignRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeNfeProcOutOpSignRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeNfeProcOutOpTransmit(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeNfeProcOutOpTransmit/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeNfeProcOutOpUpload(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeNfeProcOutOpUpload`,
    body
  };
  return request.call(this, options);
}

export async function dfeOpReadContent(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeOpReadContent/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeProcEventoNFeInRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeProcEventoNFeIn`,
    
  };
  return request.call(this, options);
}

export async function dfeProcEventoNFeInReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeProcEventoNFeIn/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeProcEventoNFeOutRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeProcEventoNFeOut`,
    
  };
  return request.call(this, options);
}

export async function dfeProcEventoNFeOutReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeProcEventoNFeOut/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeProcInutNFeCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeProcInutNFe`,
    body
  };
  return request.call(this, options);
}

export async function dfeProcInutNFeRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeProcInutNFe`,
    
  };
  return request.call(this, options);
}

export async function dfeProcInutNFeReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeProcInutNFe/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeResEventoRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeResEvento`,
    
  };
  return request.call(this, options);
}

export async function dfeResEventoReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeResEvento/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeResNFeInRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeResNFeIn`,
    
  };
  return request.call(this, options);
}

export async function dfeResNFeInReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/fiscal/br/dfeResNFeIn/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dfeResNFeInOpManifest(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/dfeResNFeInOpManifest/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function documentSefazOpFetch(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/documentSefazOpFetch`,
    body
  };
  return request.call(this, options);
}

export async function spedOpExport(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/fiscal/br/spedOpExport`,
    body
  };
  return request.call(this, options);
}
