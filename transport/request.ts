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

	const req: any = {
		url: baseUrl + options.path,
		method: options.method,
		json: true,
	};

	// NÃO envie `headers` se não tiver nada; senão você pode sobrescrever os do credential.
	if (options.headers && Object.keys(options.headers).length > 0) {
		req.headers = options.headers;
	}

	// Idem para qs
	if (options.qs && Object.keys(options.qs).length > 0) {
		req.qs = options.qs;
	}

	// Só envie body quando existir (e não envie body em GET)
	if (options.body !== undefined && options.method !== 'GET') {
		req.body = options.body;
	}

	console.log('[ZenERP][request]', {
		method: req.method,
		url: req.url,
		headers: req.headers,
		qs: req.qs,
		hasBody: req.body !== undefined,
	});

	const response = await this.helpers.httpRequestWithAuthentication.call(
		this,
		'zenApi',
		req,
	);

	if (Array.isArray(response)) {
		return response.map((item) => ({ json: item }));
	}

	return [{ json: response }];
}
