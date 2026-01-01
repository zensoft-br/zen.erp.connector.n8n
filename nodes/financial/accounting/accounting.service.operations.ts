/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function accountCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/account`,
    body
  };
  return request.call(this, options);
}

export async function accountRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/account`,
    
  };
  return request.call(this, options);
}

export async function accountUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/accounting/account`,
    body
  };
  return request.call(this, options);
}

export async function accountDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/accounting/account/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/account/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountCategoryCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/accountCategory`,
    body
  };
  return request.call(this, options);
}

export async function accountCategoryRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/accountCategory`,
    
  };
  return request.call(this, options);
}

export async function accountCategoryUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/accounting/accountCategory`,
    body
  };
  return request.call(this, options);
}

export async function accountCategoryDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/accounting/accountCategory/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountCategoryReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/accountCategory/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountChartCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/accountChart`,
    body
  };
  return request.call(this, options);
}

export async function accountChartRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/accountChart`,
    
  };
  return request.call(this, options);
}

export async function accountChartUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/accounting/accountChart`,
    body
  };
  return request.call(this, options);
}

export async function accountChartDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/accounting/accountChart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountChartReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/accountChart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountChartOpClone(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/accountChartOpClone/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountChartOpImport(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/accountChartOpImport/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function accountChartOpLevelCreate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/accountChartOpLevelCreate/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountChartOpLevelDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/accountChartOpLevelDelete/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountChartOpLevelUpdate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/accountChartOpLevelUpdate/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountChartOpNextShortCode(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/accountChartOpNextShortCode/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountConversionCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/accountConversion`,
    body
  };
  return request.call(this, options);
}

export async function accountConversionRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/accountConversion`,
    
  };
  return request.call(this, options);
}

export async function accountConversionUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/accounting/accountConversion`,
    body
  };
  return request.call(this, options);
}

export async function accountConversionDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/accounting/accountConversion/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountConversionReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/accountConversion/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountConversionChartCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/accountConversionChart`,
    body
  };
  return request.call(this, options);
}

export async function accountConversionChartRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/accountConversionChart`,
    
  };
  return request.call(this, options);
}

export async function accountConversionChartUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/accounting/accountConversionChart`,
    body
  };
  return request.call(this, options);
}

export async function accountConversionChartDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/accounting/accountConversionChart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountConversionChartReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/accountConversionChart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountDefaultCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/accountDefault`,
    body
  };
  return request.call(this, options);
}

export async function accountDefaultRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/accountDefault`,
    
  };
  return request.call(this, options);
}

export async function accountDefaultUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/accounting/accountDefault`,
    body
  };
  return request.call(this, options);
}

export async function accountDefaultDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/accounting/accountDefault/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountDefaultReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/accountDefault/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accountDefaultOpRead(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/accountDefaultOpRead`,
    body
  };
  return request.call(this, options);
}

export async function accountFiscalYearRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/accountFiscalYear`,
    
  };
  return request.call(this, options);
}

export async function assetInventoryRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/assetInventory`,
    
  };
  return request.call(this, options);
}

export async function assetInventoryCurrentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/assetInventoryCurrent`,
    
  };
  return request.call(this, options);
}

export async function assetTagRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/assetTag`,
    
  };
  return request.call(this, options);
}

export async function assetTagReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/assetTag/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function fiscalYearOpClose(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/fiscalYearOpClose/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function journalEntryCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/journalEntry`,
    body
  };
  return request.call(this, options);
}

export async function journalEntryRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/journalEntry`,
    
  };
  return request.call(this, options);
}

export async function journalEntryUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/accounting/journalEntry`,
    body
  };
  return request.call(this, options);
}

export async function journalEntryDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/accounting/journalEntry/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function journalEntryReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/journalEntry/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function journalEntryOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/journalEntryOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function journalEntryOpPublish(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/journalEntryOpPublish/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function journalEntryOpPublishRevert(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/journalEntryOpPublishRevert/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function journalEntryOpUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/journalEntryOpUpdate`,
    body
  };
  return request.call(this, options);
}

export async function journalItemCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/journalItem`,
    body
  };
  return request.call(this, options);
}

export async function journalItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/journalItem`,
    
  };
  return request.call(this, options);
}

export async function journalItemUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/accounting/journalItem`,
    body
  };
  return request.call(this, options);
}

export async function journalItemDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/accounting/journalItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function journalItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/journalItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function ledgerItemRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/ledgerItem`,
    
  };
  return request.call(this, options);
}

export async function ledgerItemReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/ledgerItem/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function ledgerItemBalanceRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/ledgerItemBalance`,
    
  };
  return request.call(this, options);
}

export async function resultCenterCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/resultCenter`,
    body
  };
  return request.call(this, options);
}

export async function resultCenterRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/resultCenter`,
    
  };
  return request.call(this, options);
}

export async function resultCenterUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/accounting/resultCenter`,
    body
  };
  return request.call(this, options);
}

export async function resultCenterDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/accounting/resultCenter/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function resultCenterReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/resultCenter/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function resultCenterChartCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/resultCenterChart`,
    body
  };
  return request.call(this, options);
}

export async function resultCenterChartRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/resultCenterChart`,
    
  };
  return request.call(this, options);
}

export async function resultCenterChartUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/financial/accounting/resultCenterChart`,
    body
  };
  return request.call(this, options);
}

export async function resultCenterChartDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/financial/accounting/resultCenterChart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function resultCenterChartReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/financial/accounting/resultCenterChart/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function resultCenterChartOpLevelCreate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/resultCenterChartOpLevelCreate/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function resultCenterChartOpLevelDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/resultCenterChartOpLevelDelete/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function resultCenterChartOpLevelUpdate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/financial/accounting/resultCenterChartOpLevelUpdate/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
