/* eslint-disable func-names, prefer-arrow-callback */
describe('Random Number Page', () => {
  ['macbook-13' /* , 'iphone-5' */].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.mockFixture('RandomNumber');
        cy.mockGA();
        cy.viewport(device);
      });

      describe('Quick Draw', () => {
        it('Should send pageview events', () => {
          cy.visit('/number');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/number' });
        });

        it('Should contain a working link to the public draw', () => {
          cy.visit('/number');
          cy.getComponent('MakeCertifiedDrawPanel__button').click();
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Number',
            eventAction: 'Start Public',
            eventLabel: 'From Scratch',
          });
          cy.location('pathname').should('eq', '/number/public');
        });

        it('Should have a share button that takes the user to the public draw', () => {
          cy.visit('/number');
          cy.getComponent('SubmitFormButton').click();
          cy.getComponent('ShareDrawButton').click();
          cy.getComponent('ShareDrawButton__confirm').click();
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Number',
            eventAction: 'Start Public',
            eventLabel: 'From Quick Result',
          });
          cy.location('pathname').should('eq', '/number/public');
        });

        describe('Create', () => {
          describe('Error feedback', () => {
            it('Should show feedback if there are server errors', () => {
              cy.visit('/number');
              cy.route({
                method: 'POST',
                url: '/api/random_number/',
                status: 503,
                response: {},
              }).as('failedRequest');
              cy.getComponent('SubmitFormButton').click();
              cy.wait('@failedRequest');
              cy.getComponent('ErrorFeedback').should('be.visible');

              // It should recover form the error
              cy.mockFixture('RandomNumber'); // Reset the mock with the 200 response
              cy.getComponent('SubmitFormButton').click();
              cy.getComponent('ErrorFeedback').should('not.exist');
            });

            describe('Invalid configurations', function() {
              it('Should show error when any required field is empty', function() {
                cy.visit('/number');
                cy.getComponent('RandomNumber__from-field').within(() => {
                  cy.getComponent('RandomNumber__from-field-input').clear();
                  cy.getError().should('be.visible');
                  cy.getComponent('RandomNumber__from-field-input').type(2);
                  cy.getError().should('not.exist');
                });

                cy.getComponent('RandomNumber__to-field').within(() => {
                  cy.getComponent('RandomNumber__to-field-input').clear();
                  cy.getError().should('be.visible');
                  cy.getComponent('RandomNumber__to-field-input').type(10);
                  cy.getError().should('not.exist');
                });

                cy.getComponent('RandomNumber__number-of-results-field').within(() => {
                  cy.getComponent('RandomNumber__number-of-results-field-input').clear();
                  cy.getError().should('be.visible');
                  cy.getComponent('RandomNumber__number-of-results-field-input').type(2);
                  cy.getError().should('not.exist');
                });
              });

              it('Should show error when range is invalid', function() {
                cy.visit('/number');
                cy.getComponent('RandomNumber__from-field-input')
                  .clear()
                  .type(12);
                cy.getComponent('SubmitFormButton').click();
                cy.getComponent('ErrorFeedback').should('be.visible');
              });

              it('Should show error when range is too small', function() {
                cy.visit('/number');
                cy.getComponent('RandomNumber__number-of-results-field-input')
                  .clear()
                  .type(12);
                cy.getComponent('SubmitFormButton').click();
                cy.getComponent('ErrorFeedback').should('be.visible');
                cy.getComponent('RandomNumber__allow-repeated-field-input').check();
                cy.getComponent('ErrorFeedback').should('not.exist');
              });
            });
          });

          it('Should have the right default values', function() {
            cy.visit('/number');
            cy.getComponent('RandomNumber__from-field-input').should('have.value', '1');
            cy.getComponent('RandomNumber__to-field-input').should('have.value', '10');
            cy.getComponent('RandomNumber__number-of-results-field-input').should(
              'have.value',
              '1',
            );
            cy.getComponent('RandomNumber__allow-repeated-field-input').should('not.exist');
          });

          it('Request sent contains the right data', function() {
            cy.visit('/number');
            cy.getComponent('RandomNumber__from-field-input')
              .clear()
              .type(3);
            cy.getComponent('RandomNumber__to-field-input')
              .clear()
              .type(100);
            cy.getComponent('RandomNumber__number-of-results-field-input')
              .clear()
              .type(2);
            cy.getComponent('SubmitFormButton').click();

            cy.mockedRequestWait('POST', '/api/random_number')
              .its('requestBody')
              .should('deep.eq', {
                allow_repeated_results: false,
                number_of_results: 2,
                range_max: 100,
                range_min: 3,
                title: null,
                description: null,
              });
          });

          it('Should send GA event on toss', function() {
            cy.visit('/number');
            cy.getComponent('SubmitFormButton').click();
            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventAction: 'Toss',
              eventCategory: 'Number',
            });
          });

          it('Results are shown', function() {
            cy.visit('/number');
            cy.getComponent('SubmitFormButton').click();
            cy.mockedRequestWait('POST', '/api/random_number');
            cy.mockedRequestWait(
              'POST',
              '/api/random_number/6ce5042f-f931-4a79-a716-dfadccc978d0/toss',
            );
            cy.getComponent('RandomNumberResult__result').should('be.visible');
          });
        });

        it('Changing data after toss should create a new draw', function() {
          cy.visit('/number');
          cy.getComponent('SubmitFormButton').click();
          cy.mockedRequestWait('POST', '/api/random_number')
            .its('requestBody')
            .should('contain', {
              number_of_results: 1,
            });
          cy.mockedRequestWait(
            'POST',
            '/api/random_number/6ce5042f-f931-4a79-a716-dfadccc978d0/toss',
          );
          cy.getComponent('RandomNumberResult__result').should('be.visible');
          cy.getComponent('RandomNumber__number-of-results-field-input')
            .clear()
            .type(3);
          cy.getComponent('SubmitFormButton').click();
          cy.mockedRequestWait('POST', '/api/random_number')
            .its('requestBody')
            .should('contain', {
              number_of_results: 3,
            });
          cy.mockedRequestWait(
            'POST',
            '/api/random_number/6ce5042f-f931-4a79-a716-dfadccc978d0/toss',
          );
        });
      });

      describe('Public Draw', () => {
        it('Events sent on pageview', () => {
          cy.visit('/number/public');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/number/public' });
        });

        it('Events sent on publish', () => {
          cy.visit('/number/public');
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('WizardForm__next-button').click();
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Number',
            eventAction: 'Publish',
            eventLabel: 'ebdb2628-9fef-438d-9395-de1a4d7bc789',
          });
        });

        it('It should be possible to create a public draw', () => {
          cy.visit('/number/public');

          // Go to second step
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('PublicDetails__title-field-input')
            .clear()
            .type('The title');
          cy.getComponent('PublicDetails__description-field-input')
            .clear()
            .type('A cool description');

          // // Go to third step
          cy.getComponent('WizardForm__next-button').click();

          // // Go to third step
          cy.getComponent('WizardForm__next-button').click();

          cy.mockedRequestWait('POST', '/api/random_number')
            .its('requestBody')
            .should('deep.eq', {
              allow_repeated_results: false,
              description: 'A cool description',
              number_of_results: 1,
              range_max: 10,
              range_min: 1,
              title: 'The title',
            });
          cy.mockedRequestWait(
            'POST',
            '/api/random_number/6ce5042f-f931-4a79-a716-dfadccc978d0/toss',
          );
          cy.location('pathname').should(
            'eq',
            '/number/ebdb2628-9fef-438d-9395-de1a4d7bc789/success',
          );
        });
      });

      // TODO Remove the trailing slashes from all the other tests
      describe('Published page', () => {
        it('Google Analytics pageview event is sent', () => {
          cy.visit('/number/ebdb2628-9fef-438d-9395-de1a4d7bc789');
          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', {
              hitType: 'pageview',
              page: '/number/ebdb2628-9fef-438d-9395-de1a4d7bc789',
            });
        });
        it('Should show the countdown if there are not results', () => {
          const missingSeconds = 10;
          cy.goBackInTime(
            'RandomNumber',
            '/api/random_number/ebdb2628-9fef-438d-9395-de1a4d7bc789/',
            missingSeconds,
          );
          cy.visit('/number/ebdb2628-9fef-438d-9395-aaaaaaaaaaaa');
          cy.getComponent('Countdown').should('be.visible');

          // Fast forward the countdown
          cy.tick((missingSeconds + 1) * 1000);

          // Once the countdown is over, the the api should be called again
          cy.mockedRequestWait('GET', '/api/random_number/ebdb2628-9fef-438d-9395-aaaaaaaaaaaa/');
        });
        it('Should show results and the raffle details', () => {
          cy.visit('/number/ebdb2628-9fef-438d-9395-de1a4d7bc789');
          cy.getComponent('DrawHeading__title').contains('Cool title');
          cy.getComponent('RandomNumberResult__result').should('be.visible');

          cy.findAllByText('Desde 1').should('exist');
          cy.findAllByText('Hasta 10').should('exist');
          cy.findAllByText('Número de resultados 1').should('exist');
        });

        it('Should show share buttons', () => {
          cy.mockWindowOpen();
          cy.visit('/number/ebdb2628-9fef-438d-9395-de1a4d7bc789');
          cy.getComponent('SocialButton__whatsapp').click();
          cy.get('@ga').and('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Number',
            eventAction: 'Social Share Draw',
            eventLabel: 'whatsapp',
          });
          cy.get('@winOpen').and('be.calledOnce');
        });
      });
    });
  });
});
