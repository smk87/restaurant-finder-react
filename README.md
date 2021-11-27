# Restaurant Finder

## This project is developed with -

-   React (CRA)
-   Rect Router
-   Typescript
-   Ant Design
-   Redux
-   Redux Thunk
-   Redux Persist
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
7. `styles` folder will contain the reusable stylings for the app.

## Setup

1. Clone the repo and run `yarn install`
2. Run `yarn start` to start the app
3. To build the project for production run `yarn build`
