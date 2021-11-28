// Library imports
import Axios from 'axios';

// File imports
import { envs } from 'config';

export const http = Axios.create({
	baseURL: envs.API_BASE_URL,
});

// Request interceptor
http.interceptors.request.use(async (request) => {
	request.headers = {
		...request.headers,
		Authorization: `${envs.FSQ_API_KEY}`,
		'Access-Control-Max-Age': '600',
	};

	return request;
});
