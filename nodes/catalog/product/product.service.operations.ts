/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function codeConversionCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/product/codeConversion`,
    body
  };
  return request.call(this, options);
}

export async function codeConversionRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/codeConversion`,
    
  };
  return request.call(this, options);
}

export async function codeConversionUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/product/codeConversion`,
    body
  };
  return request.call(this, options);
}

export async function codeConversionDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/product/codeConversion/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function codeConversionReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/codeConversion/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function codeConversionListCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/product/codeConversionList`,
    body
  };
  return request.call(this, options);
}

export async function codeConversionListRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/codeConversionList`,
    
  };
  return request.call(this, options);
}

export async function codeConversionListUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/product/codeConversionList`,
    body
  };
  return request.call(this, options);
}

export async function codeConversionListDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/product/codeConversionList/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function codeConversionListReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/codeConversionList/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dimensionCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/product/dimension`,
    body
  };
  return request.call(this, options);
}

export async function dimensionRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/dimension`,
    
  };
  return request.call(this, options);
}

export async function dimensionUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/product/dimension`,
    body
  };
  return request.call(this, options);
}

export async function dimensionDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/product/dimension/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function dimensionReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/dimension/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/product/product`,
    body
  };
  return request.call(this, options);
}

export async function productRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/product`,
    
  };
  return request.call(this, options);
}

export async function productUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/product/product`,
    body
  };
  return request.call(this, options);
}

export async function productDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/product/product/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/product/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productKitComponentCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/product/productKitComponent`,
    body
  };
  return request.call(this, options);
}

export async function productKitComponentRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/productKitComponent`,
    
  };
  return request.call(this, options);
}

export async function productKitComponentUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/product/productKitComponent`,
    body
  };
  return request.call(this, options);
}

export async function productKitComponentDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/product/productKitComponent/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productKitComponentReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/productKitComponent/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productOpClone(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/product/productOpClone/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function productOpConvertToUnit(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/catalog/product/productOpConvertToUnit/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productPackingCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/product/productPacking`,
    body
  };
  return request.call(this, options);
}

export async function productPackingRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/productPacking`,
    
  };
  return request.call(this, options);
}

export async function productPackingUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/product/productPacking`,
    body
  };
  return request.call(this, options);
}

export async function productPackingDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/product/productPacking/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productPackingReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/productPacking/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productPackingOpConvertToUnit(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/catalog/product/productPackingOpConvertToUnit/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productProfileCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/product/productProfile`,
    body
  };
  return request.call(this, options);
}

export async function productProfileRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/productProfile`,
    
  };
  return request.call(this, options);
}

export async function productProfileUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/product/productProfile`,
    body
  };
  return request.call(this, options);
}

export async function productProfileDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/product/productProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productProfileReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/productProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productUnitConversionCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/product/productUnitConversion`,
    body
  };
  return request.call(this, options);
}

export async function productUnitConversionRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/productUnitConversion`,
    
  };
  return request.call(this, options);
}

export async function productUnitConversionUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/product/productUnitConversion`,
    body
  };
  return request.call(this, options);
}

export async function productUnitConversionDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/product/productUnitConversion/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productUnitConversionReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/productUnitConversion/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productVariantCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/product/productVariant`,
    body
  };
  return request.call(this, options);
}

export async function productVariantRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/productVariant`,
    
  };
  return request.call(this, options);
}

export async function productVariantUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/product/productVariant`,
    body
  };
  return request.call(this, options);
}

export async function productVariantDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/product/productVariant/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function productVariantReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/productVariant/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function unitCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/catalog/product/unit`,
    body
  };
  return request.call(this, options);
}

export async function unitRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/unit`,
    
  };
  return request.call(this, options);
}

export async function unitUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/catalog/product/unit`,
    body
  };
  return request.call(this, options);
}

export async function unitDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/catalog/product/unit/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function unitReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/catalog/product/unit/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}
