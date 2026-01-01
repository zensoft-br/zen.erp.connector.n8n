import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'PersonHierarchyCreate', value: 'personHierarchyCreate' },
    { name: 'PersonHierarchyDelete', value: 'personHierarchyDelete' },
    { name: 'PersonHierarchyRead', value: 'personHierarchyRead' },
    { name: 'PersonHierarchyReadById', value: 'personHierarchyReadById' },
    { name: 'PersonHierarchyUpdate', value: 'personHierarchyUpdate' },
    { name: 'PersonHierarchyViewRead', value: 'personHierarchyViewRead' },
    { name: 'PriceListChangeRequestCreate', value: 'priceListChangeRequestCreate' },
    { name: 'PriceListChangeRequestDelete', value: 'priceListChangeRequestDelete' },
    { name: 'PriceListChangeRequestOpApprove', value: 'priceListChangeRequestOpApprove' },
    { name: 'PriceListChangeRequestOpReject', value: 'priceListChangeRequestOpReject' },
    { name: 'PriceListChangeRequestRead', value: 'priceListChangeRequestRead' },
    { name: 'PriceListChangeRequestReadById', value: 'priceListChangeRequestReadById' },
    { name: 'PriceListOpFind', value: 'priceListOpFind' },
    { name: 'PriceListTransformationCreate', value: 'priceListTransformationCreate' },
    { name: 'PriceListTransformationDelete', value: 'priceListTransformationDelete' },
    { name: 'PriceListTransformationOpCalculate', value: 'priceListTransformationOpCalculate' },
    { name: 'PriceListTransformationRead', value: 'priceListTransformationRead' },
    { name: 'PriceListTransformationReadById', value: 'priceListTransformationReadById' },
    { name: 'PriceListTransformationUpdate', value: 'priceListTransformationUpdate' }
  ],
  default: 'personHierarchyCreate',
}];

export const fields: INodeProperties[] = [
  {
    displayName: 'ID',
    name: 'id',
    type: 'number',
    default: null,
  },
  {
    displayName: 'Body',
    name: 'body',
    type: 'json',
    default: {},
  },
];
