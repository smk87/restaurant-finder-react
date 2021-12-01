// Library imports
import { Dispatch } from 'redux';

// File imports
import { restaurantList } from 'statics';
import { restaurantActions } from './actions';
import { getRandomInt } from 'utils';
import { Restaurant, SearchPayload } from './restaurant.types';

export const dispatchers = Object.freeze({
	autoSearch:
		() =>
		(dispatch: Dispatch): void => {
			const { results } = restaurantList;
			const randomPlace = results[getRandomInt(results.length - 1)];

			dispatch(
				restaurantActions.autoSearch({
					result: {
						name: randomPlace.name,
						latitude: randomPlace.geocodes.main.latitude,
						longitude: randomPlace.geocodes.main.longitude,
					},
				})
			);
		},
	search:
		(payload: SearchPayload) =>
		(dispatch: Dispatch): void => {
			type Result = typeof results[0];

			const { results } = restaurantList;
			const placesToSearch: Restaurant[] = [];

			if (payload.searchText) {
				results.forEach((result: Result) => {
					if (result.name.toLowerCase().indexOf(payload.searchText.toLowerCase()) > -1) {
						placesToSearch.push({
							name: result.name,
							latitude: result.geocodes.main.latitude,
							longitude: result.geocodes.main.longitude,
						});
					}
				});

				if (placesToSearch.length > 0) {
					dispatch(
						restaurantActions.search({
							result: placesToSearch,
							searchText: payload.searchText,
						})
					);
				} else {
					dispatch(
						restaurantActions.search({
							result: null,
							searchText: payload.searchText,
						})
					);
				}
			} else {
				dispatch(
					restaurantActions.search({
						result: null,
						searchText: '',
					})
				);
			}
		},
});
