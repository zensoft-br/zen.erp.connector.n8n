import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'PrinterCreate', value: 'printerCreate' },
    { name: 'PrinterDelete', value: 'printerDelete' },
    { name: 'PrinterJobCreate', value: 'printerJobCreate' },
    { name: 'PrinterJobDataReadById', value: 'printerJobDataReadById' },
    { name: 'PrinterJobDelete', value: 'printerJobDelete' },
    { name: 'PrinterJobOpFetch', value: 'printerJobOpFetch' },
    { name: 'PrinterJobOpPrinted', value: 'printerJobOpPrinted' },
    { name: 'PrinterJobOpUnlock', value: 'printerJobOpUnlock' },
    { name: 'PrinterJobRead', value: 'printerJobRead' },
    { name: 'PrinterJobReadById', value: 'printerJobReadById' },
    { name: 'PrinterOpPause', value: 'printerOpPause' },
    { name: 'PrinterOpPauseRevert', value: 'printerOpPauseRevert' },
    { name: 'PrinterOpPrintTestPage', value: 'printerOpPrintTestPage' },
    { name: 'PrinterOpPrinterJobFetch', value: 'printerOpPrinterJobFetch' },
    { name: 'PrinterRead', value: 'printerRead' },
    { name: 'PrinterReadById', value: 'printerReadById' },
    { name: 'PrinterUpdate', value: 'printerUpdate' }
  ],
  default: 'printerCreate',
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
