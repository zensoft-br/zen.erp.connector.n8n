import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'ShipmentCreate', value: 'shipmentCreate' },
    { name: 'ShipmentDelete', value: 'shipmentDelete' },
    { name: 'ShipmentOpApprove', value: 'shipmentOpApprove' },
    { name: 'ShipmentOpApproveRevert', value: 'shipmentOpApproveRevert' },
    { name: 'ShipmentOpCheckFinish', value: 'shipmentOpCheckFinish' },
    { name: 'ShipmentOpCheckFinishRevert', value: 'shipmentOpCheckFinishRevert' },
    { name: 'ShipmentOpCheckIgnore', value: 'shipmentOpCheckIgnore' },
    { name: 'ShipmentOpCheckStart', value: 'shipmentOpCheckStart' },
    { name: 'ShipmentOpCheckStartRevert', value: 'shipmentOpCheckStartRevert' },
    { name: 'ShipmentOpFinish', value: 'shipmentOpFinish' },
    { name: 'ShipmentOpFinishRevert', value: 'shipmentOpFinishRevert' },
    { name: 'ShipmentOpLoadIgnore', value: 'shipmentOpLoadIgnore' },
    { name: 'ShipmentOpLoadStart', value: 'shipmentOpLoadStart' },
    { name: 'ShipmentOpLoadStartRevert', value: 'shipmentOpLoadStartRevert' },
    { name: 'ShipmentOpLoadVolume', value: 'shipmentOpLoadVolume' },
    { name: 'ShipmentOpOutgoingInvoiceBind', value: 'shipmentOpOutgoingInvoiceBind' },
    { name: 'ShipmentOpOutgoingInvoiceBindRevert', value: 'shipmentOpOutgoingInvoiceBindRevert' },
    { name: 'ShipmentOpPrepare', value: 'shipmentOpPrepare' },
    { name: 'ShipmentOpPrepareRevert', value: 'shipmentOpPrepareRevert' },
    { name: 'ShipmentRead', value: 'shipmentRead' },
    { name: 'ShipmentReadById', value: 'shipmentReadById' },
    { name: 'ShipmentUpdate', value: 'shipmentUpdate' }
  ],
  default: 'shipmentCreate',
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
