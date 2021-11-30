// File imports
import { rootReducer } from './reducerCombine';
import { RestaurantState } from './restaurant/restaurant.types';

export type RootState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionReturnType<T = any> = {
	type: string;
	payload?: T;
};

export type ApplicationState = {
	restaurant: RestaurantState;
};
