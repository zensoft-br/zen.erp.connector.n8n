/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function personCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/person/person`,
    body
  };
  return request.call(this, options);
}

export async function personRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/person`,
    
  };
  return request.call(this, options);
}

export async function personUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/person/person`,
    body
  };
  return request.call(this, options);
}

export async function personDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/person/person/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/person/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personAddressCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/person/personAddress`,
    body
  };
  return request.call(this, options);
}

export async function personAddressRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/personAddress`,
    
  };
  return request.call(this, options);
}

export async function personAddressUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/person/personAddress`,
    body
  };
  return request.call(this, options);
}

export async function personAddressDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/person/personAddress/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personAddressReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/personAddress/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personAddressOpSetDefault(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/catalog/person/personAddressOpSetDefault/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personCommentCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/person/personComment`,
    body
  };
  return request.call(this, options);
}

export async function personCommentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/personComment`,
    
  };
  return request.call(this, options);
}

export async function personCommentUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/person/personComment`,
    body
  };
  return request.call(this, options);
}

export async function personCommentDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/person/personComment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personCommentReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/personComment/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personCompactRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/personCompact`,
    
  };
  return request.call(this, options);
}

export async function personCompactReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/personCompact/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personContactCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/person/personContact`,
    body
  };
  return request.call(this, options);
}

export async function personContactRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/personContact`,
    
  };
  return request.call(this, options);
}

export async function personContactUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/person/personContact`,
    body
  };
  return request.call(this, options);
}

export async function personContactDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/person/personContact/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personContactReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/personContact/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personDocumentCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/person/personDocument`,
    body
  };
  return request.call(this, options);
}

export async function personDocumentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/personDocument`,
    
  };
  return request.call(this, options);
}

export async function personDocumentUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/person/personDocument`,
    body
  };
  return request.call(this, options);
}

export async function personDocumentDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/person/personDocument/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personDocumentReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/personDocument/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personGroupCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/person/personGroup`,
    body
  };
  return request.call(this, options);
}

export async function personGroupRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/personGroup`,
    
  };
  return request.call(this, options);
}

export async function personGroupUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/person/personGroup`,
    body
  };
  return request.call(this, options);
}

export async function personGroupDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/person/personGroup/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personGroupReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/person/personGroup/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function personOpReadFromPersonDirectory(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/catalog/person/personOpReadFromPersonDirectory`,
    
  };
  return request.call(this, options);
}
