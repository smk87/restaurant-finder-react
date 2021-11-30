// Library imports
import { combineReducers, Reducer } from 'redux';

import { restaurantReducer } from './restaurant';
import { ApplicationState } from './store.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
	/**
	 * Reducers here
	 */
	restaurant: restaurantReducer,
});
