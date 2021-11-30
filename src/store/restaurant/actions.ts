// File imports
import { RESTAURANT } from './actionTypes';
import { ActionReturnType } from 'store/store.types';
import { Restaurant } from './restaurant.types';

export const restaurantActions = {
	search: (payload: Restaurant): ActionReturnType => ({
		type: RESTAURANT.AUTO_SEARCH,
		payload,
	}),
};
