/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function workflowCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/workflow/workflow`,
    body
  };
  return request.call(this, options);
}

export async function workflowRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/workflow/workflow`,
    
  };
  return request.call(this, options);
}

export async function workflowUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/workflow/workflow`,
    body
  };
  return request.call(this, options);
}

export async function workflowDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/workflow/workflow/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workflowReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/workflow/workflow/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workflowConnectorCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/workflow/workflowConnector`,
    body
  };
  return request.call(this, options);
}

export async function workflowConnectorRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/workflow/workflowConnector`,
    
  };
  return request.call(this, options);
}

export async function workflowConnectorUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/workflow/workflowConnector`,
    body
  };
  return request.call(this, options);
}

export async function workflowConnectorDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/workflow/workflowConnector/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workflowConnectorReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/workflow/workflowConnector/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workflowNodeCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/workflow/workflowNode`,
    body
  };
  return request.call(this, options);
}

export async function workflowNodeRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/workflow/workflowNode`,
    
  };
  return request.call(this, options);
}

export async function workflowNodeUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/workflow/workflowNode`,
    body
  };
  return request.call(this, options);
}

export async function workflowNodeDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/workflow/workflowNode/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workflowNodeReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/workflow/workflowNode/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workflowOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/workflow/workflowOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workflowOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/workflow/workflowOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workflowOpCreateOrUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/workflow/workflowOpCreateOrUpdate`,
    body
  };
  return request.call(this, options);
}

export async function workflowOpDisable(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/workflow/workflowOpDisable/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workflowOpDisableRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/workflow/workflowOpDisableRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workflowOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/workflow/workflowOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workflowOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/workflow/workflowOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workpieceRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/workflow/workpiece`,
    
  };
  return request.call(this, options);
}

export async function workpieceReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/workflow/workpiece/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workpieceNodeRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/workflow/workpieceNode`,
    
  };
  return request.call(this, options);
}

export async function workpieceNodeReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/workflow/workpieceNode/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workpieceOpForward(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/workflow/workpieceOpForward/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function workpieceOpRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/workflow/workpieceOpRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
