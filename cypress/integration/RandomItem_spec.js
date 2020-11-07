/* eslint-disable func-names, prefer-arrow-callback */
describe('Random Item Page', () => {
  ['macbook-13' /* , 'iphone-5' */].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.mockFixture('RandomItem');
        cy.mockGA();
        cy.viewport(device);
      });

      describe('Quick Draw', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/item')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*random_item_og_image([^>]+)/);
              expect(html).to.match(
                /<meta property="og:title".*Elegir elementos aleatorios de una lista([^>]+)/,
              );
            });
        });

        it('Should send pageview events', () => {
          cy.visit('/item');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/item' });
        });

        describe('Access a quick draw', () => {
          it('The configuration is pre loaded and the latest result is shown', () => {
            cy.visit('/item/5cd0c818-9857-484e-9060-7347c1bb3fe5');

            cy.findByRole('spinbutton', { name: /cuántos elementos/i }).should('have.value', '1');

            // Latest result is visible
            cy.getComponent('RandomItemResult').within(() => {
              cy.contains('silla');
            });
          });

          it('Changing data after toss should create a new draw', () => {
            cy.fixture('RandomItem').then(fixtures => {
              const fixtureCreate = fixtures.find(fixture => fixture.path === '/api/lottery/');
              const newResponse = {
                ...fixtureCreate.response,
                private_id: 'ba6caf84-859d-49a3-8f63-549f0c3131ec',
              };

              cy.route(fixtureCreate.method, fixtureCreate.path, newResponse).as(`newDrawCreated`);
            });
            cy.visit('/item/5cd0c818-9857-484e-9060-7347c1bb3fe5');
            cy.findByRole('spinbutton', { name: /cuántos elementos/i })
              .clear()
              .type('2');
            cy.getComponent('SubmitFormButton').click();

            // A new draw should be created and tossed
            cy.wait('@newDrawCreated').its('requestBody.number_of_results').should('eq', 2);
            cy.mockedRequestWait('POST', '/api/lottery/ba6caf84-859d-49a3-8f63-549f0c3131ec/toss/');
          });
        });

        it('Should contain a working link to the public draw', () => {
          cy.visit('/item');
          cy.getComponent('MakeCertifiedDrawPanel__button').click();
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Item',
            eventAction: 'Start Public',
            eventLabel: 'From Scratch',
          });
          cy.location('pathname').should('eq', '/item/public');
        });

        describe('Create', () => {
          describe('Error feedback', () => {
            it('Should show feedback if there are server errors', () => {
              cy.visit('/item');
              cy.route({
                method: 'POST',
                url: '/api/lottery/',
                status: 503,
                response: {},
              }).as('failedRequest');
              cy.getComponent('ItemsInput__inputField').type('prize1,');
              cy.getComponent('SubmitFormButton').click();
              cy.wait('@failedRequest');
              cy.getComponent('ErrorFeedback').should('be.visible');

              // It should recover form the error
              cy.mockFixture('RandomItem'); // Reset the mock with the 200 response
              cy.getComponent('SubmitFormButton').click();
              cy.getComponent('ErrorFeedback').should('not.exist');
            });

            describe('Invalid configurations', function () {
              it('Should show error when any required field is empty', function () {
                cy.visit('/item');

                cy.findByRole('spinbutton', { name: /cuántos elementos/i }).clear();
                cy.getComponent('RandomItem__number-of-items-field').shouldHaveError();
                cy.findByText(/Este campo es obligatorio/);
                cy.findByRole('spinbutton', { name: /cuántos elementos/i }).type(2);
                cy.getComponent('RandomItem__number-of-items-field').shouldNotHaveError();

                // Make required errors show up
                cy.getComponent('SubmitFormButton').click();

                // It should error if participants is empty
                cy.getComponent('ItemsInput').shouldHaveError();
                cy.getComponent('ItemsInput__inputField').type('item1,');
                cy.getComponent('ItemsInput').shouldNotHaveError();
              });

              it('Should recover from not enough items to choose N of them', () => {
                cy.visit('/item');
                cy.getComponent('ItemsInput__inputField').type('prize1,');
                cy.findByRole('spinbutton', { name: /cuántos elementos/i })
                  .clear()
                  .type(2);
                cy.getComponent('SubmitFormButton').click();
                cy.getComponent('ErrorFeedback').should('be.visible');
                cy.getComponent('ItemsInput__inputField').type('prize2, prize3');
                cy.getComponent('ErrorFeedback').should('not.exist');
              });
            });
          });

          it('Should have the right default values', function () {
            cy.visit('/item');

            cy.findByRole('spinbutton', { name: /cuántos elementos/i }).should('have.value', '1');
            cy.getComponent('MultiValueDisplay__chip').should('not.exist');
          });

          it('Request sent contains the right data', function () {
            cy.visit('/item');
            cy.findByRole('spinbutton', { name: /cuántos elementos/i })
              .clear()
              .type(2);

            cy.getComponent('ItemsInput__inputField').type('prize2, prize3');
            cy.getComponent('SubmitFormButton').click();

            cy.mockedRequestWait('POST', '/api/lottery/')
              .its('requestBody')
              .should('deep.eq', {
                number_of_results: 2,
                participants: [{ name: 'prize2' }, { name: 'prize3' }],
                title: null,
                description: null,
                metadata: [{ client: 'web', key: 'isQuickDraw', value: 'true' }],
              });
          });

          it('Should send GA event on toss', function () {
            cy.visit('/item');
            cy.getComponent('ItemsInput__inputField').type('prize2,');
            cy.getComponent('SubmitFormButton').click();
            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventAction: 'Toss',
              eventCategory: 'Item',
            });
          });

          it('Results are shown', function () {
            cy.visit('/item');
            cy.getComponent('ItemsInput__inputField').type('prize2,');
            cy.getComponent('SubmitFormButton').click();
            cy.getComponent('RandomItemResult').should('be.visible');
          });
        });
      });

      describe('Public Draw', () => {
        beforeEach(() => {
          cy.fixture('RandomItem').then(fixtures => {
            const fixtureCreate = fixtures.find(fixture => fixture.path === '/api/lottery/');
            const newResponse = {
              ...fixtureCreate.response,
              private_id: '43c357b7-91ec-448a-1111-000000000000',
              id: '43c357b7-91ec-448a-1111-111111111111',
            };

            cy.route(fixtureCreate.method, fixtureCreate.path, newResponse).as(
              `wait${fixtureCreate.method}${fixtureCreate.path}`,
            );
          });
        });

        it('Should have the correct OG tags on SSR', () => {
          cy.request('/item/public')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*random_item_og_image([^>]+)/);
              expect(html).to.match(
                /<meta property="og:title".*Elegir elementos aleatorios de una lista([^>]+)/,
              );
            });
        });

        describe('Analytics', () => {
          it('Events sent on pageview', () => {
            cy.visit('/item/public');

            cy.get('@ga')
              .should('be.calledWith', 'create', 'UA-XXXXX-Y')
              .and('be.calledWith', 'send', { hitType: 'pageview', page: '/item/public' });
          });

          it('Events sent on publish', () => {
            cy.visit('/item/public');
            cy.getComponent('ItemsInput__inputField').type('prize2,');
            cy.getComponent('WizardForm__next-button').click();
            cy.getComponent('WizardForm__next-button').click();
            cy.getComponent('WizardForm__next-button').click();
            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventCategory: 'Item',
              eventAction: 'Publish',
              eventLabel: '43c357b7-91ec-448a-1111-111111111111',
            });
          });
        });

        it('It should be possible to create a public draw', () => {
          cy.visit('/item/public');

          cy.getComponent('ItemsInput__inputField').type('phone,');

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

          cy.mockedRequestWait('POST', '/api/lottery/')
            .its('requestBody')
            .should('deep.eq', {
              description: 'A cool description',
              number_of_results: 1,
              participants: [{ name: 'phone' }],
              title: 'The title',
              metadata: [{ client: 'web', key: 'isQuickDraw', value: 'false' }],
            });
          cy.mockedRequestWait('POST', '/api/lottery/43c357b7-91ec-448a-1111-000000000000/toss/');
          cy.location('pathname').should(
            'eq',
            '/item/43c357b7-91ec-448a-1111-111111111111/success',
          );
        });
      });

      describe('Published page', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/item/ebdb2628-9fef-438d-9395-de1a4d7bc789')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*random_item_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*Cool title([^>]+)/);
            });
        });

        it('Analytics events sent on pageview', () => {
          cy.visit('/item/ebdb2628-9fef-438d-9395-de1a4d7bc789');
          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', {
              hitType: 'pageview',
              page: '/item/ebdb2628-9fef-438d-9395-de1a4d7bc789',
            });
        });
        it('Should show the countdown if there are not results', () => {
          const missingSeconds = 10;
          cy.goBackInTime(
            'RandomItem',
            '/api/lottery/ebdb2628-9fef-438d-9395-aaaaaaaaaaaa/',
            missingSeconds,
          );
          cy.visit('/item/ebdb2628-9fef-438d-9395-aaaaaaaaaaaa');
          cy.getComponent('Countdown').should('be.visible');

          // Fast forward the countdown
          cy.tick((missingSeconds + 1) * 1000);

          // Once the countdown is over, the the api should be called again
          cy.mockedRequestWait('GET', '/api/lottery/ebdb2628-9fef-438d-9395-aaaaaaaaaaaa/');
        });
        it('Should show results and the raffle details', () => {
          cy.visit('/item/ebdb2628-9fef-438d-9395-de1a4d7bc789');
          cy.getComponent('DrawHeading__title').contains('Cool title');
          cy.getComponent('RandomItemResult').should('be.visible');

          cy.findAllByText('Número de elementos a elegir: 1').should('exist');
        });

        it('Should show share buttons', () => {
          cy.mockWindowOpen();
          cy.visit('/item/ebdb2628-9fef-438d-9395-de1a4d7bc789');
          cy.getComponent('SocialButton__whatsapp').click();
          cy.get('@ga').and('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Item',
            eventAction: 'Social Share Draw',
            eventLabel: 'whatsapp',
          });
          cy.get('@winOpen').and('be.calledOnce');
        });
      });
    });
  });
});
