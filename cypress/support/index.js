// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// We need to mock the server side requests when running the integration tests with Cypress
import serverMock from '../serverMock';

try {
  serverMock();
} catch (error) {
  console.log('error', error);
}

Cypress.Server.defaults({
  port: 5000,
  delay: 100,
  force404: true,
  enable: true,
});
