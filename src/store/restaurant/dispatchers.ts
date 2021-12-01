// Library imports
import { Dispatch } from 'redux';

// File imports
import { restaurantList } from 'statics';
import { restaurantActions } from './actions';
import { getRandomInt } from 'utils';

export const dispatchers = Object.freeze({
	autoSearch:
		() =>
		(dispatch: Dispatch): void => {
			const { results } = restaurantList;
			const randomPlace = results[getRandomInt(results.length - 1)];

			dispatch(
				restaurantActions.autoSearch({
					name: randomPlace.name,
					latitude: randomPlace.geocodes.main.latitude,
					longitude: randomPlace.geocodes.main.longitude,
				})
			);
		},
});
