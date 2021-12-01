// File import
import { ActionReturnType } from 'store/store.types';
import { RESTAURANT } from './actionTypes';
import { Restaurant, RestaurantActionReturnType, RestaurantState, SearchDispatchPayload } from './restaurant.types';

const initialState: RestaurantState = {
	searchResult: null,
	searchText: '',
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
				searchResult: [action.payload?.result as Restaurant] || null,
				searchText: '',
			};

		// Auto search
		case RESTAURANT.SEARCH:
			return {
				...state,
				searchResult: (action.payload?.result as Restaurant[]) || null,
				searchText: (action.payload as SearchDispatchPayload)?.searchText || '',
			};

		// Clear search
		case RESTAURANT.CLEAR:
			return {
				...state,
				searchResult: null,
				searchText: '',
			};

		// Default state
		default:
			return state;
	}
};
