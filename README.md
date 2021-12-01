# Restaurant Finder

## This project is developed with -

-   React (CRA)
-   Rect Router
-   Typescript
-   Ant Design
-   Redux
-   Redux Thunk
-   Redux Persist
-   React Google Map
-   Axios
-   MUI styling (Stand alone css-in-js solution)
-   Eslint
-   Prettier
-   Jest

## Important points

1. We have used `Redux Persist` to make our app persist, so that the user may have easier experience.
2. We have used `Redux Thunk` to execute async operation through redux.
3. We have integrated `Eslint` and `Prettier` for a consistent convention for coding throughout the app.
4. For styling purpose we have used MUI styling. This standalone solution provides us with different API for styling. More info can be found [here](https://mui.com/styles/basics/#why-use-muis-styling-solution).
5. Note that, there are mainly two folders in our project's structure to develop components for the app. `atoms` folder will mainly consist of the most basic component which are needed for the app. i.e- input, button etc. On the other hand, `views` will consists of more complex component. i.e- page component, component which consists of other components etc.
6. `hooks` folder is mainly for developing reusable stateful logic both for generic cases and app specific cases.
7. `styles` folder contains the reusable stylings for the app.
8. `apis` folder contains api request methods to backend service.
9. `statics` folder is used for storing static data into it. As, our backend service `Foursquare` was having CORS issue, we have stored the static response from the given api endpoint: `https://api.foursquare.com/v3/places/search?query=restaurant&ll=23.7784828%2C90.3938461&radius=3000`.
10. Note that, there are some coordinates mismatch in `Foursquare` API's response with google map
11. We are showing multiple location as result when searching with keyword and single random location as result for automatic search.
12. There is also a feature to clear search result for the ease of user.
13. As we are using static data to load in the map without any API call, we have only used single action for each dispatch.
14. `utils` folders have some generic functions which can be reused.
15. We have written some unit tests for `utils` to check their functionality as, they can be reused in various places.

## Setup

1. Clone the repo and run `yarn install`
2. Create `.env` file with necessary environment variables, see `.env.example` for reference:
    - `REACT_APP_API_BASE_URL` : Base url endpoint for backend API service
    - `REACT_APP_FSQ_API_KEY` : API key for Foursquare API.
    - `REACT_APP_GOOGLE_MAP_API_KEY`: API key for Google Map API for Javascript.
3. Run `yarn start` to start the app
4. To build the project for production run `yarn build`
5. To lint and format the project while developing run `yarn lint` and `yarn format` respectively
