describe('Raffle Page', () => {
  ['macbook-13', 'iphone-5'].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.mockFixture('Raffle');
        cy.mockGA();
        cy.viewport(device);
      });

      describe('Public Draw', () => {
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
              eventLabel: 'b29f44c2-1022-408a-925f-63e5f77a12ad',
            });
          });
        });

        it('Create', () => {
          // TODO remove this
          cy.mockGA();
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

          cy.mockedRequestWait('POST', '/api/raffle')
            .its('requestBody')
            .should('deep.eq', {
              description: 'A cool description',
              prizes: [{ name: 'prize1' }, { name: 'prize2' }],
              participants: [{ name: 'one' }, { name: 'two' }],
              title: 'The title',
            });

          cy.mockedRequestWait('POST', '/api/raffle/29080f6b-b3e4-412c-8008-7e26081ea17c/toss');
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Raffle',
            eventAction: 'Publish',
            eventLabel: 'b29f44c2-1022-408a-925f-63e5f77a12ad',
          });

          // Redirect to draw with the public id
          cy.location('pathname').should(
            'eq',
            '/raffle/b29f44c2-1022-408a-925f-63e5f77a12ad/success',
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

      describe('Quick Raffle', () => {
        it('Should send pageview events', () => {
          cy.visit('/raffle');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/raffle' });
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

        it('Should have a share button that takes the user to the public draw', () => {
          cy.visit('/raffle');
          cy.clock();
          cy.getComponent('PrizesInput__inputField').type('prize1,');
          cy.getComponent('ParticipantsInput__inputField').type('you, I,');
          cy.getComponent('SubmitFormButton').click();
          cy.getComponent('ShareDrawButton').click();
          cy.getComponent('ShareDrawButton__confirm').click();
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Raffle',
            eventAction: 'Start Public',
            eventLabel: 'From Quick Result',
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
            cy.clock();
            cy.getComponent('PrizesInput__inputField').type('prize1,');
            cy.getComponent('ParticipantsInput__inputField').type('you, I,');
            cy.getComponent('SubmitFormButton').click();

            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventCategory: 'Raffle',
              eventAction: 'Toss',
            });

            cy.tick(4000); // Fast forward the loading animation
            cy.mockedRequestWait('POST', '/api/raffle')
              .its('requestBody')
              .should('deep.eq', {
                participants: [{ name: 'you' }, { name: 'I' }],
                prizes: [{ name: 'prize1' }],
                title: null,
                description: null,
              });

            cy.mockedRequestWait('POST', '/api/raffle/29080f6b-b3e4-412c-8008-7e26081ea17c/toss');
            cy.getComponent('WinnersList__result').should('be.visible');
          });

          it('Changing data after toss should create a new draw', () => {
            cy.visit('/raffle');
            cy.clock();
            cy.getComponent('PrizesInput__inputField').type('prize1,');
            cy.getComponent('ParticipantsInput__inputField').type('you, I,');
            cy.getComponent('SubmitFormButton').click();
            cy.mockedRequestWait('POST', '/api/raffle')
              .its('requestBody.participants')
              .should('deep.eq', [{ name: 'you' }, { name: 'I' }]);
            // TODO remove this
            cy.tick(4000); // Fast forward the loading animation
            cy.mockedRequestWait('POST', '/api/raffle/29080f6b-b3e4-412c-8008-7e26081ea17c/toss');
            cy.getComponent('WinnersList__result').should('be.visible');
            cy.getComponent('ParticipantsInput__inputField').type('she,');
            cy.getComponent('SubmitFormButton').click();

            // A new draw should be created and tossed
            cy.mockedRequestWait('POST', '/api/raffle')
              .its('requestBody.participants')
              .should('deep.eq', [{ name: 'you' }, { name: 'I' }, { name: 'she' }]);
            cy.mockedRequestWait('POST', '/api/raffle/29080f6b-b3e4-412c-8008-7e26081ea17c/toss');
          });
        });
      });

      describe('Published page', () => {
        it('Analytics events sent on pageview', () => {
          cy.visit('/raffle/b29f44c2-1022-408a-925f-63e5f77a12ad');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', {
              hitType: 'pageview',
              page: '/raffle/b29f44c2-1022-408a-925f-63e5f77a12ad',
            });
        });

        it('Should show the countdown if there are not results', () => {
          cy.clock(new Date().getTime());
          const missingSeconds = 2;

          cy.fixture('Raffle').then(fixtures => {
            const now = new Date();
            now.setSeconds(now.getSeconds() + missingSeconds);
            const dateInFuture = now.toISOString();
            const fixtureGetRaffle = fixtures.find(
              fixture => fixture.path === '/api/raffle/b29f44c2-1022-408a-925f-63e5f77a12ad',
            );
            fixtureGetRaffle.response.results[0].schedule_date = dateInFuture;
            fixtureGetRaffle.response.results[0].value = null;
            cy.route(fixtureGetRaffle.method, fixtureGetRaffle.path, fixtureGetRaffle.response).as(
              'LoadData',
            );
          });
          cy.visit('/raffle/b29f44c2-1022-408a-925f-63e5f77a12ad');
          cy.wait('@LoadData');
          cy.getComponent('Countdown').should('be.visible');

          // Fast forward the countdown
          cy.tick((missingSeconds + 1) * 1000);

          // Once the countdown is over, the the api should be called again
          cy.wait('@LoadData');
        });

        it('Should show results and the raffle details', () => {
          cy.visit('/raffle/b29f44c2-1022-408a-925f-63e5f77a12ad');
          cy.mockedRequestWait('GET', '/api/raffle/b29f44c2-1022-408a-925f-63e5f77a12ad');
          cy.getComponent('DrawHeading__title').contains('This is the title');
          cy.getComponent('WinnersList__result').should('have.length', 1);

          // Non winners should not be shown
          cy.contains('Participant 1').should('not.exist');
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
