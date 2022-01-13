# Star Wars Web App

A themed web app built with **React**, **Material-UI** and **Typescript** which consumes the public **Star Wars API (SWAPI)**.

This web app helps you explore all 7 Star Wars movies by Planets, Spaceships, Vehicles, People, Films and Species.

This app has been built to practice core concepts of React with Typescript.

## Features

- Login & SignUp page with local user authentication
- Form validation
- Local user storage in order to refresh page without being logged out
- Overview page for all Star Wars resources
- Resources navigation and pagination
- Search for each resource through SWAPI and input field debouncing
- Resource detail page with related resources navigation
- Support for mobile screens
- Logout user
- Simple error handling with react-error-boundary

## Prerequisites

- Node and NPM
- Yarn

## Setup


1. Clone this repo

```bash
git clone git@github.com:siboscol/star-wars-app.git
```

2. Install all dependencies

```bash
cd star-wars-app
yarn
```

3. Start local server

```bash
yarn start
```

Now you can visit [`localhost:3000`](http://localhost:3000) from your browser.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Possible Improvements

- Implement NodeJs Server to implement JWT authentication (reusing https://github.com/siboscol/node-ts-rest)
- Extend the app with Unit Testing for components with `React Testing Library`
- Integrate breadcrumb for navigation
- Implement a central State management system with Redux in order to store and cache APis responses and avoid server overload and improve loading time and user experience
- Improve images resizing and overall layout and background images
- Improve Apis error handling by showing error messages and leave app in a consistent state

## License
[MIT](https://choosealicense.com/licenses/mit/)

## References

- https://swapi.dev/
- https://mui.com/
- https://reactrouter.com/
- https://starwars-visualguide.com/#/
- https://dev.to/finiam/predictable-react-authentication-with-the-context-api-g10
- https://javascript.plainenglish.io/creating-a-sign-up-form-in-react-with-typescript-516b1a172913
- https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
- https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react
