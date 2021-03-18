/* eslint-disable func-names, prefer-arrow-callback */
describe('Random Letter Page', () => {
  ['macbook-13' /* , 'iphone-5' */].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.mockFixture('RandomLetter');
        cy.mockGA();
        cy.viewport(device);
      });

      describe('Quick Draw', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/letter')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*random_letter_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*Generar letras aleatorias([^>]+)/);
            });
        });

        it('Should send pageview events', () => {
          cy.visit('/letter');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/letter' });
        });

        describe('Access a quick draw', () => {
          it('The configuration is pre loaded and the latest result is shown', () => {
            cy.visit('/letter/4e331585-d8c8-4517-afb6-2e355a5f8493');

            cy.findByRole('spinbutton', { name: /Número de letras/ }).should('have.value', '2');
            cy.findByRole('checkbox', { name: /Permitir letras repetidas/ }).should('be.checked');

            // Latest result is visible
            cy.getComponent('RandomLetterResult').within(() => {
              cy.contains('Z');
              cy.contains('Y');
            });
          });

          it('Changing data after toss should create a new draw', () => {
            cy.fixture('RandomLetter').then(fixtures => {
              const fixtureCreateGroups = fixtures.find(fixture => fixture.path === '/api/letter/');
              const newResponse = {
                ...fixtureCreateGroups.response,
                private_id: '43c357b7-91ec-448a-0000-ac059cc3a555',
              };

              cy.route(fixtureCreateGroups.method, fixtureCreateGroups.path, newResponse).as(
                `newDrawCreated`,
              );
            });
            cy.visit('/letter/4e331585-d8c8-4517-afb6-2e355a5f8493');
            cy.findByRole('spinbutton', { name: /Número de letras/ })
              .clear()
              .type('3');
            cy.getComponent('SubmitFormButton').click();

            // A new draw should be created and tossed
            cy.wait('@newDrawCreated').its('requestBody.number_of_results').should('eq', 3);
            cy.mockedRequestWait('POST', '/api/letter/43c357b7-91ec-448a-0000-ac059cc3a555/toss/');
          });
        });

        it('Should contain a working link to the public draw', () => {
          cy.visit('/letter');
          cy.getComponent('MakeCertifiedDrawPanel__button').click();
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Letter',
            eventAction: 'Start Public',
            eventLabel: 'From Scratch',
          });
          cy.location('pathname').should('eq', '/letter/public');
        });

        describe('Create', () => {
          describe('Error feedback', () => {
            it('Should show feedback if there are server errors', () => {
              cy.visit('/letter');
              cy.route({
                method: 'POST',
                url: '/api/letter/',
                status: 503,
                response: {},
              }).as('failedRequest');
              cy.getComponent('SubmitFormButton').click();
              cy.wait('@failedRequest');
              cy.getComponent('ErrorFeedback').should('be.visible');

              // It should recover form the error
              cy.mockFixture('RandomLetter'); // Reset the mock with the 200 response
              cy.getComponent('SubmitFormButton').click();
              cy.getComponent('ErrorFeedback').should('not.exist');
            });

            describe('Invalid configurations', function () {
              it('Should show error when any required field is empty', function () {
                cy.visit('/letter');

                cy.findByRole('spinbutton', { name: /Número de letras/ }).clear();
                cy.getComponent('RandomLetter__number-of-results-field').shouldHaveError();
                cy.findByText(/Este campo es obligatorio/);
                cy.findByRole('spinbutton', { name: /Número de letras/ }).type(2);
                cy.getComponent('RandomLetter__number-of-results-field').shouldNotHaveError();
              });

              it('Should show error when no letters are requested', function () {
                cy.visit('/letter');
                cy.findByRole('spinbutton', { name: /Número de letras/ })
                  .clear()
                  .type(0);
                cy.getComponent('RandomLetter__number-of-results-field').shouldHaveError();
                cy.findByText(/al menos 1 letra/);
              });
            });
          });

          it('Should have the right default values', function () {
            cy.visit('/letter');

            cy.findByRole('spinbutton', { name: /Número de letras/ }).should('have.value', '1');
            cy.findByRole('checkbox', { name: /Permitir letras repetidas/ }).should('not.exist');
          });

          it('Request sent contains the right data', function () {
            cy.visit('/letter');
            cy.findByRole('spinbutton', { name: /Número de letras/ })
              .clear()
              .type(2);
            cy.getComponent('SubmitFormButton').click();

            cy.mockedRequestWait('POST', '/api/letter/')
              .its('requestBody')
              .should('deep.eq', {
                allow_repeated_results: false,
                number_of_results: 2,
                title: null,
                description: null,
                metadata: [{ client: 'web', key: 'isQuickDraw', value: 'true' }],
              });
          });

          it('Should send GA event on toss', function () {
            cy.visit('/letter');
            cy.getComponent('SubmitFormButton').click();
            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventAction: 'Toss',
              eventCategory: 'Letter',
            });
          });

          it('Results are shown', function () {
            cy.visit('/letter');
            cy.getComponent('SubmitFormButton').click();
            cy.getComponent('RandomLetterResult').should('be.visible');
          });
        });
      });

      describe('Public Draw', () => {
        beforeEach(() => {
          cy.fixture('RandomLetter').then(fixtures => {
            const fixtureCreateGroups = fixtures.find(fixture => fixture.path === '/api/letter/');
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
          cy.request('/letter/public')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*random_letter_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*Generar letras aleatorias([^>]+)/);
            });
        });

        describe('Analytics', () => {
          it('Events sent on pageview', () => {
            cy.visit('/letter/public');

            cy.get('@ga')
              .should('be.calledWith', 'create', 'UA-XXXXX-Y')
              .and('be.calledWith', 'send', { hitType: 'pageview', page: '/letter/public' });
          });

          it('Events sent on publish', () => {
            cy.visit('/letter/public');
            cy.getComponent('WizardForm__next-button').click();
            cy.getComponent('WizardForm__next-button').click();
            cy.getComponent('WizardForm__next-button').click();
            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventCategory: 'Letter',
              eventAction: 'Publish',
              eventLabel: '43c357b7-91ec-448a-1111-111111111111',
            });
          });
        });

        it('It should be possible to create a public draw', () => {
          cy.visit('/letter/public');

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

          cy.mockedRequestWait('POST', '/api/letter/')
            .its('requestBody')
            .should('deep.eq', {
              allow_repeated_results: false,
              description: 'A cool description',
              number_of_results: 1,
              title: 'The title',
              metadata: [{ client: 'web', key: 'isQuickDraw', value: 'false' }],
            });
          cy.mockedRequestWait('POST', '/api/letter/43c357b7-91ec-448a-1111-000000000000/toss/');
          cy.location('pathname').should(
            'eq',
            '/letter/43c357b7-91ec-448a-1111-111111111111/success',
          );
        });
      });

      describe('Published page', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/letter/ebdb2628-9fef-438d-9395-de1a4d7bc789')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*random_letter_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*Cool title([^>]+)/);
            });
        });

        it('Analytics events sent on pageview', () => {
          cy.visit('/letter/ebdb2628-9fef-438d-9395-de1a4d7bc789');
          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', {
              hitType: 'pageview',
              page: '/letter/ebdb2628-9fef-438d-9395-de1a4d7bc789',
            });
        });
        it('Should show the countdown if there are not results', () => {
          const missingSeconds = 10;
          cy.goBackInTime(
            'RandomLetter',
            '/api/letter/ebdb2628-9fef-438d-9395-aaaaaaaaaaaa/',
            missingSeconds,
          );
          cy.visit('/letter/ebdb2628-9fef-438d-9395-aaaaaaaaaaaa');
          cy.getComponent('Countdown').should('be.visible');

          // Fast forward the countdown
          cy.tick((missingSeconds + 1) * 1000);

          // Once the countdown is over, the the api should be called again
          cy.mockedRequestWait('GET', '/api/letter/ebdb2628-9fef-438d-9395-aaaaaaaaaaaa/');
        });
        it.only('Should show results and the raffle details', () => {
          cy.visit('/letter/ebdb2628-9fef-438d-9395-de1a4d7bc789');
          cy.getComponent('DrawHeading__title').contains('Cool title');
          cy.getComponent('RandomLetterResult').should('be.visible');

          cy.findAllByText('Número de letras 1').should('exist');
        });

        it('Should show share buttons', () => {
          cy.mockWindowOpen();
          cy.visit('/letter/ebdb2628-9fef-438d-9395-de1a4d7bc789');
          cy.getComponent('SocialButton__whatsapp').click();
          cy.get('@ga').and('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Letter',
            eventAction: 'Social Share Draw',
            eventLabel: 'whatsapp',
          });
          cy.get('@winOpen').and('be.calledOnce');
        });
      });
    });
  });
});
