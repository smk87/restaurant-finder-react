// Library imports
import Axios from 'axios';

// File imports
import { envs } from 'configs';

export const http = Axios.create({
	baseURL: envs.API_BASE_URL,
});

// Request interceptor
http.interceptors.request.use(async (request) => {
	request.headers = {
		...request.headers,
		Authorization: `${envs.FSQ_API_KEY}`,
	};

	return request;
});
