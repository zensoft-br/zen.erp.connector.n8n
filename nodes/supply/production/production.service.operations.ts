/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function bomCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/production/bom`,
    body
  };
  return request.call(this, options);
}

export async function bomRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/bom`,
    
  };
  return request.call(this, options);
}

export async function bomUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/production/bom`,
    body
  };
  return request.call(this, options);
}

export async function bomDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/production/bom/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function bomReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/bom/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function bomItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/production/bomItem`,
    body
  };
  return request.call(this, options);
}

export async function bomItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/bomItem`,
    
  };
  return request.call(this, options);
}

export async function bomItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/production/bomItem`,
    body
  };
  return request.call(this, options);
}

export async function bomItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/production/bomItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function bomItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/bomItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function bomOpClone(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/bomOpClone/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function operationCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/production/operation`,
    body
  };
  return request.call(this, options);
}

export async function operationRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/operation`,
    
  };
  return request.call(this, options);
}

export async function operationUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/production/operation`,
    body
  };
  return request.call(this, options);
}

export async function operationDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/production/operation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function operationReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/operation/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function operationTypeCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/production/operationType`,
    body
  };
  return request.call(this, options);
}

export async function operationTypeRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/operationType`,
    
  };
  return request.call(this, options);
}

export async function operationTypeUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/production/operationType`,
    body
  };
  return request.call(this, options);
}

export async function operationTypeDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/production/operationType/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function operationTypeReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/operationType/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function operationTypeAccountCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/production/operationTypeAccount`,
    body
  };
  return request.call(this, options);
}

export async function operationTypeAccountRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/operationTypeAccount`,
    
  };
  return request.call(this, options);
}

export async function operationTypeAccountUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/production/operationTypeAccount`,
    body
  };
  return request.call(this, options);
}

export async function operationTypeAccountDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/production/operationTypeAccount/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function operationTypeAccountReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/operationTypeAccount/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionBatchCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionBatch`,
    body
  };
  return request.call(this, options);
}

export async function productionBatchRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/productionBatch`,
    
  };
  return request.call(this, options);
}

export async function productionBatchUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/production/productionBatch`,
    body
  };
  return request.call(this, options);
}

export async function productionBatchDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/production/productionBatch/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionBatchReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/productionBatch/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionBatchOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionBatchOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionBatchOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionBatchOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionBatchOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionBatchOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionBatchOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionBatchOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionOrderCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionOrder`,
    body
  };
  return request.call(this, options);
}

export async function productionOrderRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/productionOrder`,
    
  };
  return request.call(this, options);
}

export async function productionOrderUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/production/productionOrder`,
    body
  };
  return request.call(this, options);
}

export async function productionOrderDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/production/productionOrder/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionOrderReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/productionOrder/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionOrderOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionOrderOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionOrderOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionOrderOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionOrderOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionOrderOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function productionOrderOpFinish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionOrderOpFinish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionOrderOpFinishRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionOrderOpFinishRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionOrderOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionOrderOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionOrderOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionOrderOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionProfileCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionProfile`,
    body
  };
  return request.call(this, options);
}

export async function productionProfileRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/productionProfile`,
    
  };
  return request.call(this, options);
}

export async function productionProfileUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/production/productionProfile`,
    body
  };
  return request.call(this, options);
}

export async function productionProfileDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/production/productionProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionProfileReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/productionProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionStepCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionStep`,
    body
  };
  return request.call(this, options);
}

export async function productionStepRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/productionStep`,
    
  };
  return request.call(this, options);
}

export async function productionStepUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/production/productionStep`,
    body
  };
  return request.call(this, options);
}

export async function productionStepDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/production/productionStep/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionStepReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/productionStep/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionStepConsumptionCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionStepConsumption`,
    body
  };
  return request.call(this, options);
}

export async function productionStepConsumptionRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/productionStepConsumption`,
    
  };
  return request.call(this, options);
}

export async function productionStepConsumptionUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/production/productionStepConsumption`,
    body
  };
  return request.call(this, options);
}

export async function productionStepConsumptionDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/production/productionStepConsumption/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionStepConsumptionReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/productionStepConsumption/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionStepConsumptionOpCalculate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionStepConsumptionOpCalculate/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionStepOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionStepOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function productionStepOpFinish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionStepOpFinish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionStepOpFinishRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionStepOpFinishRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionStepOpStart(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionStepOpStart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionStepOpStartRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionStepOpStartRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionStepProductionCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/supply/production/productionStepProduction`,
    body
  };
  return request.call(this, options);
}

export async function productionStepProductionRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/productionStepProduction`,
    
  };
  return request.call(this, options);
}

export async function productionStepProductionUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/supply/production/productionStepProduction`,
    body
  };
  return request.call(this, options);
}

export async function productionStepProductionDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/supply/production/productionStepProduction/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productionStepProductionReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/supply/production/productionStepProduction/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
