// File import
import { ActionReturnType } from 'store/store.types';
import { RESTAURANT } from './actionTypes';
import { RestaurantActionReturnType, RestaurantState } from './restaurant.types';

const initialState: RestaurantState = {
	searchResult: null,
};

export const restaurantReducer = (
	state: RestaurantState = initialState,
	action: ActionReturnType<RestaurantActionReturnType>
): RestaurantState => {
	switch (action.type) {
		// Auto search
		case RESTAURANT.AUTO_SEARCH:
			return {
				...state,
				searchResult: action.payload || null,
			};

		// Default state
		default:
			return state;
	}
};
