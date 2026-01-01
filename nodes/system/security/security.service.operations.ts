/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '../../../transport/request';

export async function accessPointCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/accessPoint`,
    body
  };
  return request.call(this, options);
}

export async function accessPointRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/accessPoint`,
    
  };
  return request.call(this, options);
}

export async function accessPointUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/security/accessPoint`,
    body
  };
  return request.call(this, options);
}

export async function accessPointDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/security/accessPoint/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accessPointReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/accessPoint/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accessPointOpValidate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/security/accessPointOpValidate`,
    
  };
  return request.call(this, options);
}

export async function accessProfileCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/accessProfile`,
    body
  };
  return request.call(this, options);
}

export async function accessProfileRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/accessProfile`,
    
  };
  return request.call(this, options);
}

export async function accessProfileUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/security/accessProfile`,
    body
  };
  return request.call(this, options);
}

export async function accessProfileDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/security/accessProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function accessProfileReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/accessProfile/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function grantCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/grant`,
    body
  };
  return request.call(this, options);
}

export async function grantRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/grant`,
    
  };
  return request.call(this, options);
}

export async function grantDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/security/grant/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function grantReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/grant/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function groupCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/group`,
    body
  };
  return request.call(this, options);
}

export async function groupRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/group`,
    
  };
  return request.call(this, options);
}

export async function groupUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/security/group`,
    body
  };
  return request.call(this, options);
}

export async function groupDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/security/group/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function groupReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/group/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function groupOpClone(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/groupOpClone/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function keyStoreCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/keyStore`,
    body
  };
  return request.call(this, options);
}

export async function keyStoreRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/keyStore`,
    
  };
  return request.call(this, options);
}

export async function keyStoreUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/security/keyStore`,
    body
  };
  return request.call(this, options);
}

export async function keyStoreDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/security/keyStore/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function keyStoreReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/keyStore/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function keyStoreOpReadContent(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/security/keyStoreOpReadContent/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function roleRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/role`,
    
  };
  return request.call(this, options);
}

export async function roleReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/role/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function roleAccessPointCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/roleAccessPoint`,
    body
  };
  return request.call(this, options);
}

export async function roleAccessPointRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/roleAccessPoint`,
    
  };
  return request.call(this, options);
}

export async function roleAccessPointDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/security/roleAccessPoint/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function roleAccessPointReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/roleAccessPoint/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function sessionRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/session`,
    
  };
  return request.call(this, options);
}

export async function sessionDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/security/session/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function sessionReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/session/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function sessionContext(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/sessionContext`,
    
  };
  return request.call(this, options);
}

export async function sessionOpGetCurrent(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/sessionOpGetCurrent`,
    
  };
  return request.call(this, options);
}

export async function tokenOpInvalidate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/tokenOpInvalidate`,
    body
  };
  return request.call(this, options);
}

export async function tokenOpInvalidateCurrent(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/security/tokenOpInvalidateCurrent`,
    
  };
  return request.call(this, options);
}

export async function tokenOpRenew(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/security/tokenOpRenew`,
    
  };
  return request.call(this, options);
}

export async function tokenOpRequest(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/tokenOpRequest`,
    body
  };
  return request.call(this, options);
}

export async function tokenOpRequestPermanent(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/tokenOpRequestPermanent`,
    body
  };
  return request.call(this, options);
}

export async function userCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/user`,
    body
  };
  return request.call(this, options);
}

export async function userRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/user`,
    
  };
  return request.call(this, options);
}

export async function userUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'PUT' as const,
    path: `/system/security/user`,
    body
  };
  return request.call(this, options);
}

export async function userDelete(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'DELETE' as const,
    path: `/system/security/user/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function userReadById(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/user/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function userOpActivate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpActivate/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function userOpAuthenticate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpAuthenticate`,
    body
  };
  return request.call(this, options);
}

export async function userOpChangeEmail(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpChangeEmail`,
    body
  };
  return request.call(this, options);
}

export async function userOpChangeEmailConfirmation(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpChangeEmailConfirmation`,
    body
  };
  return request.call(this, options);
}

export async function userOpChangePassword(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpChangePassword`,
    body
  };
  return request.call(this, options);
}

export async function userOpChangePasswordThird(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpChangePasswordThird/${this.getNodeParameter('id', i)}`,
    body
  };
  return request.call(this, options);
}

export async function userOpCreate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpCreate`,
    body
  };
  return request.call(this, options);
}

export async function userOpCreateConfirmation(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpCreateConfirmation`,
    body
  };
  return request.call(this, options);
}

export async function userOpCreateResend(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpCreateResend`,
    body
  };
  return request.call(this, options);
}

export async function userOpGrantOptionAdd(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpGrantOptionAdd/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function userOpGrantOptionRemove(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpGrantOptionRemove/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function userOpInactivate(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpInactivate/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function userOpResetPassword(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpResetPassword`,
    body
  };
  return request.call(this, options);
}

export async function userOpResetPasswordConfirmation(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpResetPasswordConfirmation`,
    body
  };
  return request.call(this, options);
}

export async function userOpUnlock(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpUnlock/${this.getNodeParameter('id', i)}`,
    
  };
  return request.call(this, options);
}

export async function userOpUpdate(this: IExecuteFunctions, i: number) {
  const body = this.getNodeParameter('body', i) as IDataObject;

  const options = {
    method: 'POST' as const,
    path: `/system/security/userOpUpdate`,
    body
  };
  return request.call(this, options);
}

export async function userPermissionRead(this: IExecuteFunctions, i: number) {
  

  const options = {
    method: 'GET' as const,
    path: `/system/security/userPermission`,
    
  };
  return request.call(this, options);
}
