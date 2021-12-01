export type Restaurant = {
	name: string;
	latitude: number;
	longitude: number;
};

export type RestaurantState = {
	searchResult: Restaurant[] | null;
	searchText: string;
};

// Merges all the action return type
export type RestaurantActionReturnType = SearchDispatchPayload | AutoSearchDispatchPayload;

export type SearchPayload = {
	searchText: string;
};

export type AutoSearchDispatchPayload = {
	result: Restaurant | null;
};

export type SearchDispatchPayload = {
	result: Restaurant[] | null;
	searchText: string;
};
