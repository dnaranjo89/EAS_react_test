describe('Link Sets Page', () => {
  ['macbook-13' /* , 'iphone-5' */].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.mockFixture('LinkSets');
        cy.mockGA();
        cy.viewport(device);
      });

      describe('Quick Raffle', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/sets')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*link_sets_og_image([^>]+)/);
              expect(html).to.match(
                /<meta property="og:title".*Asocia elementos de dos listas([^>]+)/,
              );
            });
        });

        it('Should send pageview events', () => {
          cy.visit('/sets');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/sets' });
        });

        describe('Access a quick draw', () => {
          it('The configuration is pre loaded and the latest result is shown', () => {
            cy.visit('/sets/a6bb82b7-4d22-46e0-92e9-4678f77150b5');

            cy.contains('item1').should('be.visible');
            cy.contains('item2').should('be.visible');
            cy.contains('person1').should('be.visible');
            cy.contains('person2').should('be.visible');

            cy.getComponent('LinkSetsResult').within(() => {
              cy.contains('item1');
              cy.contains('item2');
              cy.contains('person1');
              cy.contains('person2');
            });
          });

          it('Changing data after toss should create a new draw', () => {
            cy.fixture('LinkSets').then(fixtures => {
              const fixtureCreate = fixtures.find(fixture => fixture.path === '/api/link/');
              const newResponse = {
                ...fixtureCreate.response,
                private_id: 'd0e3b000-413e-4b5f-9cfd-e8f03eb69a6e',
              };

              cy.route(fixtureCreate.method, fixtureCreate.path, newResponse).as(`newDrawCreated`);
            });
            cy.visit('/sets/a6bb82b7-4d22-46e0-92e9-4678f77150b5');
            cy.getComponent('LinkSet1Input__inputField').type('item3,');
            cy.getComponent('SubmitFormButton').click();

            // A new draw should be created and tossed
            cy.wait('@newDrawCreated')
              .its('requestBody.items_set1')
              .should('deep.eq', ['item1', 'item2', 'item3']);
            cy.mockedRequestWait('POST', '/api/link/d0e3b000-413e-4b5f-9cfd-e8f03eb69a6e/toss/');
          });
        });

        it('Should contain a working link to the public draw', () => {
          cy.visit('/sets');
          cy.findByRole('button', { name: 'Crea el sorteo públicamente' }).click();
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Link Sets',
            eventAction: 'Start Public',
            eventLabel: 'From Scratch',
          });
          cy.location('pathname').should('eq', '/sets/public');
        });

        describe('Create', () => {
          describe('Error feedback', () => {
            it('Should show feedback if there are server errors', () => {
              cy.visit('/sets');
              cy.route({
                method: 'POST',
                url: '/api/link/',
                status: 503,
                response: {},
              }).as('failedRequest');
              cy.getComponent('LinkSet1Input__inputField').type('person,');
              cy.getComponent('LinkSet2Input__inputField').type('one, two,');
              cy.getComponent('SubmitFormButton').click();
              cy.wait('@failedRequest');
              cy.getComponent('ErrorFeedback').should('be.visible');

              // It should recover form the error
              cy.mockFixture('LinkSets'); // Reset the mock with the 200 response
              cy.getComponent('SubmitFormButton').click();
              cy.getComponent('ErrorFeedback').should('not.exist');
            });

            it('Should show error when any required field is empty', () => {
              cy.visit('/sets');
              // Make required errors show up
              cy.getComponent('SubmitFormButton').click();

              // It should error if participants is empty
              cy.getComponent('LinkSet1Input').shouldHaveError();
              cy.getComponent('LinkSet1Input__inputField').type('item1, item2,');
              cy.getComponent('LinkSet1Input').shouldNotHaveError();

              // It should error if prizes is empty
              cy.getComponent('LinkSet2Input').shouldHaveError();
              cy.getComponent('LinkSet2Input__inputField').type('person,');
              cy.getComponent('LinkSet2Input').shouldNotHaveError();
            });
          });

          it('Should have the right default values', () => {
            cy.visit('/sets');

            cy.getComponent('LinkSet1Input__inputField').should('have.value', '');
            cy.getComponent('LinkSet2Input__inputField').should('have.value', '');
            cy.getComponent('MultiValueDisplay__chip').should('not.exist');
          });

          it('Request contains the data, results are shown and analytics events sent', () => {
            cy.visit('/sets');
            cy.getComponent('LinkSet1Input__inputField').type('item1,');
            cy.getComponent('LinkSet2Input__inputField').type('person1,');
            cy.getComponent('SubmitFormButton').click();

            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventCategory: 'Link Sets',
              eventAction: 'Toss',
            });

            cy.mockedRequestWait('POST', '/api/link/')
              .its('requestBody')
              .should('deep.eq', {
                items_set1: ['item1'],
                items_set2: ['person1'],
                title: null,
                description: null,
                metadata: [{ client: 'web', key: 'isQuickDraw', value: 'true' }],
              });

            cy.mockedRequestWait('POST', '/api/link/a6bb82b7-4d22-46e0-92e9-4678f77150b5/toss/');
            cy.getComponent('LinkSetsResult').contains('item1');
            cy.getComponent('LinkSetsResult').contains('person1');
          });
        });
      });

      describe('Public Draw', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/sets/public')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*link_sets_og_image([^>]+)/);
              expect(html).to.match(
                /<meta property="og:title".*Asocia elementos de dos listas([^>]+)/,
              );
            });
        });

        describe('Analytics', () => {
          it('Events sent on pageview', () => {
            cy.visit('/sets/public');

            cy.get('@ga')
              .should('be.calledWith', 'create', 'UA-XXXXX-Y')
              .and('be.calledWith', 'send', { hitType: 'pageview', page: '/sets/public' });
          });

          it('Events sent on publish', () => {
            cy.visit('/sets/public');
            cy.getComponent('LinkSet1Input__inputField').type('item1,item2,');
            cy.getComponent('LinkSet2Input__inputField').type('you,me,');
            cy.getComponent('WizardForm__next-button').click();
            cy.getComponent('WizardForm__next-button').click();
            cy.getComponent('WizardForm__next-button').click();
            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventCategory: 'Link Sets',
              eventAction: 'Publish',
              eventLabel: '456dd451-fa91-4abe-a17d-8186be187900',
            });
          });
        });

        it('Create', () => {
          cy.visit('/sets/public');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/sets/public' });

          // Make required errors show up
          cy.getComponent('WizardForm__next-button').click();

          // It should error if any of the sets is empty
          cy.getComponent('LinkSet1Input').shouldHaveError();
          cy.getComponent('LinkSet1Input__inputField').type('item1, item2,');
          cy.getComponent('LinkSet1Input').shouldNotHaveError();

          cy.getComponent('LinkSet2Input').shouldHaveError();
          cy.getComponent('LinkSet2Input__inputField').type('person1,person2,');
          cy.getComponent('LinkSet2Input').shouldNotHaveError();

          // Go to second step
          cy.getComponent('WizardForm__next-button').click();

          // The title field should have a default value
          cy.getComponent('PublicDetails__title-field-input').should('not.have.value', '');

          // Attempt to submit step without filling the title
          cy.getComponent('PublicDetails__title-field-input').clear();
          cy.getComponent('WizardForm__next-button').click();

          // Title field should error as they are required
          cy.getComponent('PublicDetails__title-field').shouldHaveError();

          // Fill the title and its error should recover
          cy.getComponent('PublicDetails__title-field-input').type('The title');
          cy.getComponent('PublicDetails__title-field').shouldNotHaveError();

          // Fill the description
          cy.getComponent('PublicDetails__description-field-input').type('A cool description');

          // Go to third step
          cy.getComponent('WizardForm__next-button').click();

          // Submit the draw
          cy.getComponent('WizardForm__next-button').click();

          cy.mockedRequestWait('POST', '/api/link/')
            .its('requestBody')
            .should('deep.eq', {
              description: 'A cool description',
              items_set1: ['item1', 'item2'],
              items_set2: ['person1', 'person2'],
              title: 'The title',
              metadata: [{ client: 'web', key: 'isQuickDraw', value: 'false' }],
            });

          cy.mockedRequestWait('POST', '/api/link/a6bb82b7-4d22-46e0-92e9-4678f77150b5/toss/');
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Link Sets',
            eventAction: 'Publish',
            eventLabel: '456dd451-fa91-4abe-a17d-8186be187900',
          });

          // Redirect to draw with the public id
          cy.location('pathname').should(
            'eq',
            '/sets/456dd451-fa91-4abe-a17d-8186be187900/success',
          );
        });

        it('Should show feedback if there are server errors', () => {
          cy.visit('/sets/public');
          cy.route({
            method: 'POST',
            url: '/api/link/',
            status: 503,
            response: {},
          }).as('failedRequest');
          cy.getComponent('LinkSet1Input__inputField').type('item1, item2,');
          cy.getComponent('LinkSet2Input__inputField').type('person1, person2,');
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('WizardForm__next-button').click();
          cy.wait('@failedRequest');
          cy.getComponent('ErrorFeedback').should('be.visible');

          // It should recover form the error
          cy.mockFixture('LinkSets'); // Reset the mock with the 200 response
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('ErrorFeedback').should('not.exist');
        });
      });

      describe('Published page', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/sets/a7417c42-34cc-4f38-bae3-8dd5d34321e5')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*link_sets_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*The title([^>]+)/);
            });
        });

        it('Analytics events sent on pageview', () => {
          cy.visit('/sets/a7417c42-34cc-4f38-bae3-8dd5d34321e5');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', {
              hitType: 'pageview',
              page: '/sets/a7417c42-34cc-4f38-bae3-8dd5d34321e5',
            });
        });

        it('Should show results and the raffle details', () => {
          cy.visit('/sets/a7417c42-34cc-4f38-bae3-8dd5d34321e5');
          cy.getComponent('DrawHeading__title').contains('The title');
          cy.getComponent('LinkSetsResult').contains('item1');
          cy.getComponent('LinkSetsResult').contains('item2');
          cy.getComponent('LinkSetsResult').contains('me');
          cy.getComponent('LinkSetsResult').contains('you');
        });

        it('Should show share buttons', () => {
          cy.mockWindowOpen();
          cy.visit('/sets/a7417c42-34cc-4f38-bae3-8dd5d34321e5');
          cy.getComponent('SocialButton__whatsapp').click();
          cy.get('@ga').and('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Link Sets',
            eventAction: 'Social Share Draw',
            eventLabel: 'whatsapp',
          });
          cy.get('@winOpen').and('be.calledOnce');
        });
      });
    });
  });
});
