# Dragon Manager

A React application to list, create, delete and update Dragons.
<br>
Data is provided by a test API from [mockapi.io](http://mockapi.io).

Tools used:
- create-react-app
- axios
- enzyme
- redux
- redux-persist
- react-router

The code is:
- Unit tested using `Jest`
- Linted using `ESlint`

## Project setup
- Local
```
$ npm install
$ npm start
```

- Docker
```
$ docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Compiles and hot-reloads for development.<br>

### `npm run test`

Runs Unit tests with Jest.

### `npm run lint`

Runs the code linter with ESLint.
<br>
Lint rules are:
- Only single quotes allowed
- No semicolons allowed
- CamelCase only
- No console outputs allowed
- No unused vars allowed
- Commas after instruction
- Identation requires 4 spaces 