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
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/number')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*random_number_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*Generar números aleatorios([^>]+)/);
            });
        });

        it('Should send pageview events', () => {
          cy.visit('/number');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/number' });
        });

        describe('Access a quick draw', () => {
          it('The configuration is pre loaded and the latest result is shown', () => {
            cy.visit('/number/03df4731-66ee-4f69-ab5e-d91e7f2e9f7c');

            cy.findByRole('spinbutton', { name: /Desde/ }).should('have.value', '3');
            cy.findByRole('spinbutton', { name: /Hasta/ }).should('have.value', '8');
            cy.findByRole('spinbutton', { name: /Número de resultados/ }).should('have.value', '2');
            cy.findByRole('checkbox', { name: /Permitir números repetidos/ }).should('be.checked');

            // Latest result is visible
            cy.getComponent('RandomNumberResult').within(() => {
              cy.contains('7');
              cy.contains('8');
            });
          });

          it('Changing data after toss should create a new draw', () => {
            cy.fixture('RandomNumber').then(fixtures => {
              const fixtureCreateGroups = fixtures.find(
                fixture => fixture.path === '/api/random_number/',
              );
              const newResponse = {
                ...fixtureCreateGroups.response,
                private_id: '43c357b7-91ec-448a-0000-ac059cc3a555',
              };

              cy.route(fixtureCreateGroups.method, fixtureCreateGroups.path, newResponse).as(
                `newDrawCreated`,
              );
            });
            cy.visit('/number/03df4731-66ee-4f69-ab5e-d91e7f2e9f7c');
            cy.findByRole('spinbutton', { name: /Desde/ }).clear().type('5');
            cy.getComponent('SubmitFormButton').click();

            // A new draw should be created and tossed
            cy.wait('@newDrawCreated').its('requestBody.range_min').should('eq', 5);
            cy.mockedRequestWait(
              'POST',
              '/api/random_number/43c357b7-91ec-448a-0000-ac059cc3a555/toss/',
            );
          });
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

            describe('Invalid configurations', function () {
              it('Should show error when any required field is empty', function () {
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

              it('Should show error when range is invalid', function () {
                cy.visit('/number');
                cy.getComponent('RandomNumber__from-field-input').clear().type(12);
                cy.getComponent('SubmitFormButton').click();
                cy.getComponent('ErrorFeedback').should('be.visible');
              });

              it('Should show error when range is too small', function () {
                cy.visit('/number');
                cy.getComponent('RandomNumber__number-of-results-field-input').clear().type(12);
                cy.getComponent('SubmitFormButton').click();
                cy.getComponent('ErrorFeedback').should('be.visible');
                cy.getComponent('RandomNumber__allow-repeated-field-input').check();
                cy.getComponent('ErrorFeedback').should('not.exist');
              });
            });
          });

          it('Should have the right default values', function () {
            cy.visit('/number');
            cy.getComponent('RandomNumber__from-field-input').should('have.value', '1');
            cy.getComponent('RandomNumber__to-field-input').should('have.value', '10');
            cy.getComponent('RandomNumber__number-of-results-field-input').should(
              'have.value',
              '1',
            );
            cy.getComponent('RandomNumber__allow-repeated-field-input').should('not.exist');
          });

          it('Request sent contains the right data', function () {
            cy.visit('/number');
            cy.getComponent('RandomNumber__from-field-input').clear().type(3);
            cy.getComponent('RandomNumber__to-field-input').clear().type(100);
            cy.getComponent('RandomNumber__number-of-results-field-input').clear().type(2);
            cy.getComponent('SubmitFormButton').click();

            cy.mockedRequestWait('POST', '/api/random_number/')
              .its('requestBody')
              .should('deep.eq', {
                allow_repeated_results: false,
                number_of_results: 2,
                range_max: 100,
                range_min: 3,
                title: null,
                description: null,
                metadata: [{ client: 'web', key: 'isQuickDraw', value: 'true' }],
              });
          });

          it('Should send GA event on toss', function () {
            cy.visit('/number');
            cy.getComponent('SubmitFormButton').click();
            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventAction: 'Toss',
              eventCategory: 'Number',
            });
          });

          it('Results are shown', function () {
            cy.visit('/number');
            cy.getComponent('SubmitFormButton').click();
            cy.getComponent('RandomNumberResult').should('be.visible');
          });
        });
      });

      describe('Public Draw', () => {
        beforeEach(() => {
          cy.fixture('RandomNumber').then(fixtures => {
            const fixtureCreateGroups = fixtures.find(
              fixture => fixture.path === '/api/random_number/',
            );
            const newResponse = {
              ...fixtureCreateGroups.response,
              private_id: '43c357b7-91ec-448a-1111-000000000000',
              id: '43c357b7-91ec-448a-1111-111111111111',
            };

            cy.route(fixtureCreateGroups.method, fixtureCreateGroups.path, newResponse).as(
              `wait${fixtureCreateGroups.method}${fixtureCreateGroups.path}`,
            );
          });
        });

        it('Should have the correct OG tags on SSR', () => {
          cy.request('/number/public')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*random_number_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*Generar números aleatorios([^>]+)/);
            });
        });

        describe('Analytics', () => {
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
              eventLabel: '43c357b7-91ec-448a-1111-111111111111',
            });
          });
        });

        it('It should be possible to create a public draw', () => {
          cy.visit('/number/public');

          // Go to second step
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('PublicDetails__title-field-input').clear().type('The title');
          cy.getComponent('PublicDetails__description-field-input')
            .clear()
            .type('A cool description');

          // // Go to third step
          cy.getComponent('WizardForm__next-button').click();

          // // Go to third step
          cy.getComponent('WizardForm__next-button').click();

          cy.mockedRequestWait('POST', '/api/random_number/')
            .its('requestBody')
            .should('deep.eq', {
              allow_repeated_results: false,
              description: 'A cool description',
              number_of_results: 1,
              range_max: 10,
              range_min: 1,
              title: 'The title',
              metadata: [{ client: 'web', key: 'isQuickDraw', value: 'false' }],
            });
          cy.mockedRequestWait(
            'POST',
            '/api/random_number/43c357b7-91ec-448a-1111-000000000000/toss/',
          );
          cy.location('pathname').should(
            'eq',
            '/number/43c357b7-91ec-448a-1111-111111111111/success',
          );
        });
      });

      describe('Published page', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/number/ebdb2628-9fef-438d-9395-de1a4d7bc789')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*random_number_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*Cool title([^>]+)/);
            });
        });
        it('Google Analytics pageview event is sent', () => {
          cy.visit('/number/ebdb2628-9fef-438d-9395-de1a4d7bc789');
          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', {
              hitType: 'pageview',
              page: '/number/ebdb2628-9fef-438d-9395-de1a4d7bc789',
            });
        });

        it('Should show results and the raffle details', () => {
          cy.visit('/number/ebdb2628-9fef-438d-9395-de1a4d7bc789');
          cy.getComponent('DrawHeading__title').contains('Cool title');
          cy.getComponent('RandomNumberResult').should('be.visible');

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
