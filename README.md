[![Build Status](https://travis-ci.org/etcaterva/eas-frontend.svg?branch=master)](https://travis-ci.org/etcaterva/eas-frontend)

ÉchaloASuerte Frontend

## Working locally

### Set up local environment

```bash
# Set the environment to local
# export REACT_APP_ENV=local

# Install the dependencies
npm install
```

Option 1 (recommended): Run the development server

```bash
# Start the development server with hot reload
npm run start:dev
```

Option 2: Start the server to do SSR

```bash
# REACT_APP_ENV can be used to choose config settings
#  - `production`
#  - `development`
#  - `local` (default)
export REACT_APP_ENV=local

# Build production bundle
npm run build

# Start the server
npm start
```

It requires the [eas-backend](https://github.com/etcaterva/eas-backend) to be deployed locally as well.

### Run linter

```bash
npm run lint
```

### Run tests

#### Unit tests

```bash
npm test
```

#### Integration tests

Integration tests are run with [Cypress.io](https://www.cypress.io/)

```bash
# It will fire the dev server in test mode and the Cypress UI
npm run test:integration
```

## Deploying to production

[master](https://github.com/etcaterva/eas-frontend/tree/master) branch is deployed to preprod (e.g. https://dev.echaloasuerte.com or https://beta-dev.echaloasuerte.com)

[prod](https://github.com/etcaterva/eas-frontend/tree/prod) is deployed to prod (e.g. https://echaloasuerte.com)

## Documentation

[The docs](docs/architecture/architecture_diagram.jpg)
