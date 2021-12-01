// File imports
import { RESTAURANT } from './actionTypes';
import { ActionReturnType } from 'store/store.types';
import { AutoSearchDispatchPayload, SearchDispatchPayload } from './restaurant.types';

export const restaurantActions = {
	autoSearch: (payload: AutoSearchDispatchPayload): ActionReturnType => ({
		type: RESTAURANT.AUTO_SEARCH,
		payload,
	}),
	search: (payload: SearchDispatchPayload): ActionReturnType => ({
		type: RESTAURANT.SEARCH,
		payload,
	}),
	clearSearch: (): ActionReturnType => ({
		type: RESTAURANT.CLEAR,
	}),
};
