/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../transport/request';

export async function currencyCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/currency`,
    body
  };
  return request.call(this, options);
}

export async function currencyRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/currency`,
    
  };
  return request.call(this, options);
}

export async function currencyUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/currency`,
    body
  };
  return request.call(this, options);
}

export async function currencyDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/currency/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function currencyReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/currency/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function currencyExchangeRateCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/currencyExchangeRate`,
    body
  };
  return request.call(this, options);
}

export async function currencyExchangeRateRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/currencyExchangeRate`,
    
  };
  return request.call(this, options);
}

export async function currencyExchangeRateUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/currencyExchangeRate`,
    body
  };
  return request.call(this, options);
}

export async function currencyExchangeRateDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/currencyExchangeRate/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function currencyExchangeRateReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/currencyExchangeRate/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function currencyExchangeRateOpConvert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/currencyExchangeRateOpConvert`,
    
  };
  return request.call(this, options);
}

export async function currencyExchangeRateOpGetExchangeRate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/currencyExchangeRateOpGetExchangeRate`,
    
  };
  return request.call(this, options);
}

export async function currencyOpReadByCode(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/currencyOpReadByCode`,
    
  };
  return request.call(this, options);
}

export async function payableCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/payable`,
    body
  };
  return request.call(this, options);
}

export async function payableRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/payable`,
    
  };
  return request.call(this, options);
}

export async function payableUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/payable`,
    body
  };
  return request.call(this, options);
}

export async function payableDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/payable/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function payableReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/payable/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function payableOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/payableOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function payableOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/payableOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function payableOpChangeWallet(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/payableOpChangeWallet/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function payableOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/payableOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function payableOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/payableOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function payableOpRepeat(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/payableOpRepeat/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function payableOpSettle(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/payableOpSettle`,
    body
  };
  return request.call(this, options);
}

export async function payableOpUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/payableOpUpdate/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function payableOpUpdatePrepared(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/payableOpUpdatePrepared`,
    body
  };
  return request.call(this, options);
}

export async function payableSettlementRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/payableSettlement`,
    
  };
  return request.call(this, options);
}

export async function payableSettlementDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/payableSettlement/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function payableSettlementReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/payableSettlement/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function payableSettlementBillingTitleRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/payableSettlementBillingTitle`,
    
  };
  return request.call(this, options);
}

export async function payableSettlementBillingTitleReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/payableSettlementBillingTitle/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function payableSettlementMethodRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/payableSettlementMethod`,
    
  };
  return request.call(this, options);
}

export async function payableSettlementMethodReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/payableSettlementMethod/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function receivableCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/receivable`,
    body
  };
  return request.call(this, options);
}

export async function receivableRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/receivable`,
    
  };
  return request.call(this, options);
}

export async function receivableUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/receivable`,
    body
  };
  return request.call(this, options);
}

export async function receivableDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/receivable/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function receivableReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/receivable/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function receivableOpApprove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/receivableOpApprove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function receivableOpApproveRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/receivableOpApproveRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function receivableOpPrepare(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/receivableOpPrepare/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function receivableOpPrepareRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/receivableOpPrepareRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function receivableOpRepeat(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/receivableOpRepeat/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function receivableOpSend(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/receivableOpSend`,
    body
  };
  return request.call(this, options);
}

export async function receivableOpSettle(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/receivableOpSettle`,
    body
  };
  return request.call(this, options);
}

export async function receivableOpUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/receivableOpUpdate/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function receivableOpUpdatePrepared(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/receivableOpUpdatePrepared`,
    body
  };
  return request.call(this, options);
}

export async function receivableSettlementRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/receivableSettlement`,
    
  };
  return request.call(this, options);
}

export async function receivableSettlementDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/receivableSettlement/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function receivableSettlementReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/receivableSettlement/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function receivableSettlementBillingTitleRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/receivableSettlementBillingTitle`,
    
  };
  return request.call(this, options);
}

export async function receivableSettlementBillingTitleReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/receivableSettlementBillingTitle/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function receivableSettlementMethodRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/receivableSettlementMethod`,
    
  };
  return request.call(this, options);
}

export async function receivableSettlementMethodReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/receivableSettlementMethod/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
