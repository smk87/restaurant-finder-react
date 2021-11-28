/* eslint-disable @typescript-eslint/no-explicit-any */
// Library import
import { AxiosResponse } from 'axios';

// File import
import { http } from 'plugins';
import { AutoFindApiPayload } from './placesApi.types';
import { endPoints } from 'apis';

export const placesApi = Object.freeze({
	autoFind: (payload: AutoFindApiPayload): Promise<AxiosResponse<any, any>> => {
		if (!payload) {
			throw new Error('Please provide a payload');
		}

		return http.get(endPoints.autoFind(), { params: payload.params });
	},
});
