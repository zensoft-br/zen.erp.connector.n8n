import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'WorkflowConnectorCreate', value: 'workflowConnectorCreate' },
    { name: 'WorkflowConnectorDelete', value: 'workflowConnectorDelete' },
    { name: 'WorkflowConnectorRead', value: 'workflowConnectorRead' },
    { name: 'WorkflowConnectorReadById', value: 'workflowConnectorReadById' },
    { name: 'WorkflowConnectorUpdate', value: 'workflowConnectorUpdate' },
    { name: 'WorkflowCreate', value: 'workflowCreate' },
    { name: 'WorkflowDelete', value: 'workflowDelete' },
    { name: 'WorkflowNodeCreate', value: 'workflowNodeCreate' },
    { name: 'WorkflowNodeDelete', value: 'workflowNodeDelete' },
    { name: 'WorkflowNodeRead', value: 'workflowNodeRead' },
    { name: 'WorkflowNodeReadById', value: 'workflowNodeReadById' },
    { name: 'WorkflowNodeUpdate', value: 'workflowNodeUpdate' },
    { name: 'WorkflowOpApprove', value: 'workflowOpApprove' },
    { name: 'WorkflowOpApproveRevert', value: 'workflowOpApproveRevert' },
    { name: 'WorkflowOpCreateOrUpdate', value: 'workflowOpCreateOrUpdate' },
    { name: 'WorkflowOpDisable', value: 'workflowOpDisable' },
    { name: 'WorkflowOpDisableRevert', value: 'workflowOpDisableRevert' },
    { name: 'WorkflowOpPrepare', value: 'workflowOpPrepare' },
    { name: 'WorkflowOpPrepareRevert', value: 'workflowOpPrepareRevert' },
    { name: 'WorkflowRead', value: 'workflowRead' },
    { name: 'WorkflowReadById', value: 'workflowReadById' },
    { name: 'WorkflowUpdate', value: 'workflowUpdate' },
    { name: 'WorkpieceNodeRead', value: 'workpieceNodeRead' },
    { name: 'WorkpieceNodeReadById', value: 'workpieceNodeReadById' },
    { name: 'WorkpieceOpForward', value: 'workpieceOpForward' },
    { name: 'WorkpieceOpRevert', value: 'workpieceOpRevert' },
    { name: 'WorkpieceRead', value: 'workpieceRead' },
    { name: 'WorkpieceReadById', value: 'workpieceReadById' }
  ],
  default: 'workflowConnectorCreate',
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
