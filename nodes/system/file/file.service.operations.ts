/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function fileCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/file/file`,
    body
  };
  return request.call(this, options);
}

export async function fileRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/file/file`,
    
  };
  return request.call(this, options);
}

export async function fileUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/file/file`,
    body
  };
  return request.call(this, options);
}

export async function fileDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/file/file/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fileReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/file/file/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fileOpReadContent(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/file/fileOpReadContent/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
