describe('Raffle Page', () => {
  ['macbook-13' /* , 'iphone-5' */].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.mockFixture('Raffle');
        cy.mockGA();
        cy.viewport(device);
      });

      describe('Quick Raffle', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/raffle')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*raffle_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*Organizar sorteo([^>]+)/);
            });
        });

        it('Should send pageview events', () => {
          cy.visit('/raffle');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/raffle' });
        });

        describe('Access a quick draw', () => {
          it('The configuration is pre loaded and the latest result is shown', () => {
            cy.visit('/raffle/7debcd1a-d7ce-44e8-abf1-12c30ab373d4');

            cy.contains('David').should('be.visible');
            cy.contains('Pedro').should('be.visible');
            cy.contains('Mario').should('be.visible');
            cy.contains('Cristina').should('be.visible');
            cy.contains('PS4').should('be.visible');
            cy.contains('400€').should('be.visible');

            cy.getComponent('WinnersList').within(() => {
              cy.contains('Pedro');
              cy.contains('Mario');
              cy.contains('PS4');
              cy.contains('400€');
              cy.contains('Cristina').should('not.exist');
              cy.contains('David').should('not.exist');
            });
          });

          it('Changing data after toss should create a new draw', () => {
            cy.fixture('Raffle').then(fixtures => {
              const fixtureCreateRaffle = fixtures.find(fixture => fixture.path === '/api/raffle/');
              const newResponse = {
                ...fixtureCreateRaffle.response,
                private_id: 'd0e3b3c0-413e-4b5f-9cfd-e8f03eb69a6e',
              };

              cy.route(fixtureCreateRaffle.method, fixtureCreateRaffle.path, newResponse).as(
                `newDrawCreated`,
              );
            });
            cy.visit('/raffle/7debcd1a-d7ce-44e8-abf1-12c30ab373d4');
            cy.getComponent('ParticipantsInput__inputField').type('Someone,');
            cy.getComponent('SubmitFormButton').click();

            // A new draw should be created and tossed
            cy.wait('@newDrawCreated')
              .its('requestBody.participants')
              .should('deep.eq', [
                { name: 'David' },
                { name: 'Pedro' },
                { name: 'Mario' },
                { name: 'Cristina' },
                { name: 'Someone' },
              ]);
            cy.mockedRequestWait('POST', '/api/raffle/d0e3b3c0-413e-4b5f-9cfd-e8f03eb69a6e/toss/');
          });
        });

        it('Should contain a working link to the public draw', () => {
          cy.visit('/raffle');
          cy.getComponent('MakeCertifiedDrawPanel__button').click();
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Raffle',
            eventAction: 'Start Public',
            eventLabel: 'From Scratch',
          });
          cy.location('pathname').should('eq', '/raffle/public');
        });

        describe('Create', () => {
          describe('Error feedback', () => {
            it('Should show feedback if there are server errors', () => {
              cy.visit('/raffle');
              cy.route({
                method: 'POST',
                url: '/api/raffle/',
                status: 503,
                response: {},
              }).as('failedRequest');
              cy.getComponent('PrizesInput__inputField').type('prize1,');
              cy.getComponent('ParticipantsInput__inputField').type('one, two,');
              cy.getComponent('SubmitFormButton').click();
              cy.wait('@failedRequest');
              cy.getComponent('ErrorFeedback').should('be.visible');

              // It should recover form the error
              cy.mockFixture('Raffle'); // Reset the mock with the 200 response
              cy.getComponent('SubmitFormButton').click();
              cy.getComponent('ErrorFeedback').should('not.exist');
            });

            it('Should show error when any required field is empty', () => {
              cy.visit('/raffle');
              // Make required errors show up
              cy.getComponent('SubmitFormButton').click();

              // It should error if participants is empty
              cy.getComponent('PrizesInput').shouldHaveError();
              cy.getComponent('PrizesInput__inputField').type('prize1, prize2,');
              cy.getComponent('PrizesInput').shouldNotHaveError();

              // It should error if prizes is empty
              cy.getComponent('ParticipantsInput').shouldHaveError();
              cy.getComponent('ParticipantsInput__inputField').type('one,');
              cy.getComponent('ParticipantsInput').shouldNotHaveError();
            });

            it('Should recover from not enough participants for N groups', () => {
              cy.visit('/raffle');
              cy.getComponent('PrizesInput__inputField').type('prize1, prize2,');
              cy.getComponent('ParticipantsInput__inputField').type('you,');
              cy.getComponent('SubmitFormButton').click();
              cy.getComponent('ErrorFeedback').should('be.visible');
              cy.getComponent('ParticipantsInput__inputField').type('me, him,');
              cy.getComponent('ErrorFeedback').should('not.exist');
            });
          });

          it('Should have the right default values', () => {
            cy.visit('/raffle');

            cy.getComponent('PrizesInput__inputField').should('have.value', '');
            cy.getComponent('ParticipantsInput__inputField').should('have.value', '');
            cy.getComponent('MultiValueDisplay__chip').should('not.exist');
          });

          it('Request contains the data, results are shown and analytics events sent', () => {
            cy.visit('/raffle');
            cy.getComponent('PrizesInput__inputField').type('prize1,');
            cy.getComponent('ParticipantsInput__inputField').type('you, I,');
            cy.getComponent('SubmitFormButton').click();

            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventCategory: 'Raffle',
              eventAction: 'Toss',
            });

            cy.mockedRequestWait('POST', '/api/raffle/')
              .its('requestBody')
              .should('deep.eq', {
                participants: [{ name: 'you' }, { name: 'I' }],
                prizes: [{ name: 'prize1' }],
                title: null,
                description: null,
                metadata: [{ client: 'web', key: 'isQuickDraw', value: 'true' }],
              });

            cy.mockedRequestWait('POST', '/api/raffle/7debcd1a-d7ce-44e8-abf1-12c30ab373d4/toss/');
            cy.getComponent('WinnersList').contains('Pedro');
            cy.getComponent('WinnersList').contains('Mario');
            cy.getComponent('WinnersList').contains('PS4');
            cy.getComponent('WinnersList').contains('400€');
          });
        });
      });

      describe('Public Draw', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/raffle/public')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*raffle_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*Organizar sorteo([^>]+)/);
            });
        });

        describe('Analytics', () => {
          it('Events sent on pageview', () => {
            cy.visit('/raffle/public');

            cy.get('@ga')
              .should('be.calledWith', 'create', 'UA-XXXXX-Y')
              .and('be.calledWith', 'send', { hitType: 'pageview', page: '/raffle/public' });
          });

          it('Events sent on publish', () => {
            cy.visit('/raffle/public');
            cy.getComponent('PrizesInput__inputField').type('prize1,');
            cy.getComponent('ParticipantsInput__inputField').type('one, two,');
            cy.getComponent('WizardForm__next-button').click();
            cy.getComponent('WizardForm__next-button').click();
            cy.getComponent('WizardForm__next-button').click();
            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventCategory: 'Raffle',
              eventAction: 'Publish',
              eventLabel: 'b8985af9-f458-44d2-9b56-4a80ceefecf3',
            });
          });
        });

        it('Create', () => {
          cy.visit('/raffle/public');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/raffle/public' });

          // Make required errors show up
          cy.getComponent('WizardForm__next-button').click();

          // It should error if participants is empty
          cy.getComponent('PrizesInput').shouldHaveError();
          cy.getComponent('PrizesInput__inputField').type('prize1, prize2,');
          cy.getComponent('PrizesInput').shouldNotHaveError();

          // It should error if prizes is empty
          cy.getComponent('ParticipantsInput').shouldHaveError();
          cy.getComponent('ParticipantsInput__inputField').type('one,');
          cy.getComponent('ParticipantsInput').shouldNotHaveError();

          // It should error if there are less participants than prizes
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('ErrorFeedback').should('be.visible');
          cy.getComponent('ParticipantsInput__inputField').type('two,');
          cy.getComponent('ErrorFeedback').should('not.exist');

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

          cy.mockedRequestWait('POST', '/api/raffle/')
            .its('requestBody')
            .should('deep.eq', {
              description: 'A cool description',
              prizes: [{ name: 'prize1' }, { name: 'prize2' }],
              participants: [{ name: 'one' }, { name: 'two' }],
              title: 'The title',
              metadata: [{ client: 'web', key: 'isQuickDraw', value: 'false' }],
            });

          cy.mockedRequestWait('POST', '/api/raffle/7debcd1a-d7ce-44e8-abf1-12c30ab373d4/toss/');
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Raffle',
            eventAction: 'Publish',
            eventLabel: 'b8985af9-f458-44d2-9b56-4a80ceefecf3',
          });

          // Redirect to draw with the public id
          cy.location('pathname').should(
            'eq',
            '/raffle/b8985af9-f458-44d2-9b56-4a80ceefecf3/success',
          );
        });

        it('Should show feedback if there are server errors', () => {
          cy.visit('/raffle/public');
          cy.route({
            method: 'POST',
            url: '/api/raffle/',
            status: 503,
            response: {},
          }).as('failedRequest');
          cy.getComponent('PrizesInput__inputField').type('prize1, prize2,');
          cy.getComponent('ParticipantsInput__inputField').type('one, two,');
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('WizardForm__next-button').click();
          cy.wait('@failedRequest');
          cy.getComponent('ErrorFeedback').should('be.visible');

          // It should recover form the error
          cy.mockFixture('Raffle'); // Reset the mock with the 200 response
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('ErrorFeedback').should('not.exist');
        });
      });

      describe('Published page', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/raffle/b29f44c2-1022-408a-925f-63e5f77a12ad')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*raffle_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*This is the title([^>]+)/);
            });
        });

        it('Analytics events sent on pageview', () => {
          cy.visit('/raffle/b29f44c2-1022-408a-925f-63e5f77a12ad');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', {
              hitType: 'pageview',
              page: '/raffle/b29f44c2-1022-408a-925f-63e5f77a12ad',
            });
        });

        it('Should show results and the raffle details', () => {
          cy.visit('/raffle/b29f44c2-1022-408a-925f-63e5f77a12ad');
          cy.getComponent('DrawHeading__title').contains('This is the title');
          cy.getComponent('WinnersList').contains('Prize one');
          cy.getComponent('WinnersList').contains('Participant 2');

          // Non winners should not be shown
          // TODO we are only checking `#__next` cause we are actually returning the non-winner participants
          // We should change that response from the API
          cy.get('#__next').contains('Participant 1').should('not.be.visible');
        });

        it('Should show share buttons', () => {
          cy.mockWindowOpen();
          cy.visit('/raffle/b29f44c2-1022-408a-925f-63e5f77a12ad');
          cy.getComponent('SocialButton__whatsapp').click();
          cy.get('@ga').and('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Raffle',
            eventAction: 'Social Share Draw',
            eventLabel: 'whatsapp',
          });
          cy.get('@winOpen').and('be.calledOnce');
        });
      });
    });
  });
});
