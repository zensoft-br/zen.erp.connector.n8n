/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function printerCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/printing/printer`,
    body
  };
  return request.call(this, options);
}

export async function printerRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/printing/printer`,
    
  };
  return request.call(this, options);
}

export async function printerUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/printing/printer`,
    body
  };
  return request.call(this, options);
}

export async function printerDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/printing/printer/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function printerReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/printing/printer/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function printerJobCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/printing/printerJob`,
    body
  };
  return request.call(this, options);
}

export async function printerJobRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/printing/printerJob`,
    
  };
  return request.call(this, options);
}

export async function printerJobDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/printing/printerJob/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function printerJobReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/printing/printerJob/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function printerJobDataReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/printing/printerJobData/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function printerJobOpFetch(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/printing/printerJobOpFetch/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function printerJobOpPrinted(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/printing/printerJobOpPrinted/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function printerJobOpUnlock(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/printing/printerJobOpUnlock/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function printerOpPause(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/printing/printerOpPause/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function printerOpPauseRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/printing/printerOpPauseRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function printerOpPrintTestPage(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/printing/printerOpPrintTestPage/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function printerOpPrinterJobFetch(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/printing/printerOpPrinterJobFetch/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
