export type Restaurant = {
	name: string;
	latitude: number;
	longitude: number;
};

export type RestaurantState = {
	searchResult: Restaurant | null;
};
