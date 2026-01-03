import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';

type HttpError = {
	message?: string;
	response?: {
		status?: number;
		data?: unknown;
	};
};

function isHttpError(err: unknown): err is HttpError {
	return (
		typeof err === 'object' &&
		err !== null &&
		'response' in err
	);
}

type RequestSecurity = {
	auth: boolean;
	tenant: boolean;
};

export interface RequestOptions {
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	path: string;
	qs?: Record<string, string>;
	body?: IDataObject | IDataObject[] | Buffer | string;
	security?: RequestSecurity;
}

export async function request(
	this: IExecuteFunctions,
	options: RequestOptions,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('zenApi');

	if (!credentials) {
		throw new Error('Zen API credentials not found');
	}

	const baseUrl = credentials.baseUrl as string;

	const headers: Record<string, string> = {};

	const sec = options.security;
	if (sec?.auth || sec?.tenant) {
		if (sec.auth) {
			const token = credentials.token as string | undefined;
			if (!token) {
				throw new Error('Missing auth token');
			}
			headers.Authorization = `Bearer ${token}`;
		}

		if (sec.tenant) {
			const tenant = credentials.tenant as string | undefined;
			if (!tenant) {
				throw new Error('Missing tenant');
			}
			headers.tenant = tenant;
		}
	}

	try {
		const response = await this.helpers.httpRequest({
			url: baseUrl + options.path,
			method: options.method,
			headers,
			qs: options.qs,
			body: options.body,
			json: true,
		});

		const safeResponse = JSON.parse(JSON.stringify(response));

		if (Array.isArray(safeResponse)) {
			return safeResponse.map(item => ({ json: item }));
		}

		return [{ json: safeResponse }];
	} catch (err: unknown) {
		if (isHttpError(err) && err.response?.data !== undefined) {
			const safeError = JSON.parse(JSON.stringify(err.response.data));

			throw new Error(
				typeof safeError === 'string'
					? safeError
					: JSON.stringify(safeError),
			);
		}

		if (err instanceof Error) {
			throw new Error(err.message);
		}

		throw new Error('Request failed');
	}
}
