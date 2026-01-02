import type {
	IAuthenticateGeneric,
	IconFile,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ZenApi implements ICredentialType {
	name = 'zenApi';
	displayName = 'Zen API';
	icon: IconFile = 'file:zenApi.svg';
	documentationUrl = 'https://docs.zenerp.com.br/';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api.zenerp.app.br',
			required: false,
		},
		{
			displayName: 'Tenant',
			name: 'tenant',
			type: 'string',
			default: '',
			placeholder: 'Organization code',
			required: true,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: {
				password: true
			},
			default: '',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Bearer " + $credentials.token}}',
				'tenant': '={{$credentials.tenant}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			baseURL: '={{$credentials.baseUrl}}',
			url: '/auth/me',
		},
	};
}
