// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import moment from 'moment';
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('getComponent', component => cy.get(`[data-testid="${component}"]`));
Cypress.Commands.add('getError', () => cy.get(`[data-test-has-error]`));
Cypress.Commands.add('shouldHaveError', { prevSubject: 'element' }, subject =>
  cy.wrap(subject).within(() => {
    cy.getError().should('be.visible');
  }),
);
Cypress.Commands.add('shouldNotHaveError', { prevSubject: 'element' }, subject =>
  cy.wrap(subject).within(() => {
    cy.getError().should('not.exist');
  }),
);

const automockFixturePath = fixtureName => `${fixtureName}`;

Cypress.Commands.add('mockFixture', fixtureName => {
  cy.fixture(fixtureName).then(testcaseFixtureRequests => {
    testcaseFixtureRequests.forEach(request => {
      cy.route(request.method, request.path, request.response || '').as(
        `wait${request.method}${request.path}`,
      );
    });
  });
});

Cypress.Commands.add('mockedRequestWait', (method, path) => {
  cy.wait(`@wait${method}${path}`);
});

Cypress.Commands.add('automockFixture', fixtureName =>
  cy.fixture(automockFixturePath(fixtureName)),
);

// https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/stubbing-spying__google-analytics
Cypress.Commands.add('mockGA', () => {
  Cypress.on('window:before:load', win => {
    win.ga = cy.stub().as('ga'); // eslint-disable-line no-param-reassign
  });
});

Cypress.Commands.add('mockWindowOpen', () => {
  Cypress.on('window:before:load', win => {
    win.open = cy.stub().as('winOpen'); // eslint-disable-line no-param-reassign
  });
});

Cypress.Commands.add('mockFB', () => {
  Cypress.on('window:before:load', win => {
    // eslint-disable-next-line no-param-reassign
    win.FB = {
      login: cy.stub().as('FbLogin'),
      XFBML: { parse: cy.stub().as('FbParse') },
    };
  });
});

Cypress.Commands.add('simulateFbStatusChange', newStatus => {
  cy.window().then(win => {
    const simulateStatusChange = missingAttempts => {
      if (missingAttempts <= 0) {
        throw new Error('fbAsyncInit did not run on time');
      }
      if (win.cypressEas) {
        win.cypressEas.statusChange(newStatus);
      } else {
        setTimeout(() => simulateStatusChange(missingAttempts - 1), 200);
      }
    };
    simulateStatusChange(3);
  });
});

Cypress.Commands.add('goBackInTime', (fixtureFile, fixtureName, missingSeconds) => {
  // fixtureFile = FacebookRaffle
  cy.fixture(fixtureFile).then(fixtures => {
    // Find the right fixture
    const fixtureGetRaffle = fixtures.find(fixture => fixture.path === fixtureName);

    // Set the clock to `missingSeconds` seconds before it's scheduled
    const { schedule_date: scheduleDateString } = fixtureGetRaffle.response.results[0];
    const past = moment(scheduleDateString);
    past.subtract(missingSeconds, 'seconds');
    cy.clock(past.valueOf(), ['Date', 'setTimeout', 'clearTimeout']);
  });
});
