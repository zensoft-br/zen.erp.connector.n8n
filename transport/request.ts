import type { IDataObject, IExecuteFunctions } from 'n8n-workflow';

export interface RequestOptions {
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	path: string;
	qs?: Record<string, string>;
	body?: IDataObject | IDataObject[] | Buffer | string;
	headers?: Record<string, string>;
}

export async function request(
	this: IExecuteFunctions,
	options: RequestOptions,
) {
	const credentials = await this.getCredentials('zenApi');

	if (!credentials) {
		throw new Error('Zen API credentials not found');
	}

	const baseUrl = credentials.baseUrl as string;

	const response = await this.helpers.httpRequestWithAuthentication.call(
		this,
		'zenApi',
		{
			url: baseUrl + options.path,
			headers: options.headers,
			method: options.method,
			qs: options.qs,
			body: options.body,
			json: true,
		},
	);

	if (Array.isArray(response)) {
		return response.map((item) => ({ json: item }));
	}

	return [{ json: response }];
}
