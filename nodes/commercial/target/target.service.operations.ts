/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function targetCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/target/target`,
    body
  };
  return request.call(this, options);
}

export async function targetRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/target/target`,
    
  };
  return request.call(this, options);
}

export async function targetUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/commercial/target/target`,
    body
  };
  return request.call(this, options);
}

export async function targetDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/commercial/target/target/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function targetReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/target/target/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function targetGroupCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/target/targetGroup`,
    body
  };
  return request.call(this, options);
}

export async function targetGroupRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/target/targetGroup`,
    
  };
  return request.call(this, options);
}

export async function targetGroupUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/commercial/target/targetGroup`,
    body
  };
  return request.call(this, options);
}

export async function targetGroupDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/commercial/target/targetGroup/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function targetGroupReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/target/targetGroup/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function targetIntervalCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/target/targetInterval`,
    body
  };
  return request.call(this, options);
}

export async function targetIntervalRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/target/targetInterval`,
    
  };
  return request.call(this, options);
}

export async function targetIntervalUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/commercial/target/targetInterval`,
    body
  };
  return request.call(this, options);
}

export async function targetIntervalDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/commercial/target/targetInterval/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function targetIntervalReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/target/targetInterval/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function targetPlanCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/commercial/target/targetPlan`,
    body
  };
  return request.call(this, options);
}

export async function targetPlanRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/target/targetPlan`,
    
  };
  return request.call(this, options);
}

export async function targetPlanUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/commercial/target/targetPlan`,
    body
  };
  return request.call(this, options);
}

export async function targetPlanDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/commercial/target/targetPlan/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function targetPlanReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/commercial/target/targetPlan/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
