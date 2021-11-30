// File imports
import { RESTAURANT } from './actionTypes';
import { ActionReturnType } from 'store/store.types';

export const restaurantActions = {
	search: (payload: unknown): ActionReturnType => ({
		type: RESTAURANT.AUTO_SEARCH,
		payload,
	}),
};
