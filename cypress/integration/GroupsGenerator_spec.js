const superagent = require('superagent');
const mockServer = require('mockttp').getLocal();

describe('Groups Generator Page', () => {
  ['macbook-13' /* , 'iphone-5' */].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.mockFixture('GroupsGenerator');
        cy.mockGA();
        cy.viewport(device);
      });
      describe('Public Draw', () => {
        describe('Analytics', () => {
          it('Events sent on pageview', () => {
            cy.visit('/groups/public');

            cy.get('@ga')
              .should('be.calledWith', 'create', 'UA-XXXXX-Y')
              .and('be.calledWith', 'send', { hitType: 'pageview', page: '/groups/public' });
          });

          it('Events sent on publish', () => {
            cy.visit('/groups/public');
            cy.getComponent('ParticipantsInput__inputField').type('one, two,');
            cy.getComponent('WizardForm__next-button').click();
            cy.getComponent('WizardForm__next-button').click();
            cy.getComponent('WizardForm__next-button').click();
            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventCategory: 'Groups',
              eventAction: 'Publish',
              eventLabel: 'af52a47d-98fd-4685-8510-26d342e16f9b',
            });
          });
        });

        it('Create', () => {
          cy.visit('/groups/public');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/groups/public' });

          // Make required errors show up
          cy.getComponent('WizardForm__next-button').click();

          // It should error if participants is empty
          cy.getComponent('ParticipantsInput').shouldHaveError();
          cy.getComponent('ParticipantsInput__inputField').type('you,');
          cy.getComponent('ParticipantsInput').shouldNotHaveError();

          // It should error if there are less participants than groups to make
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('ErrorFeedback').should('be.visible');
          cy.getComponent('ParticipantsInput__inputField').type('me,');
          cy.getComponent('ErrorFeedback').should('not.exist');

          // Go to second step
          cy.getComponent('WizardForm__next-button').click();

          // The title field should have a default value
          cy.getComponent('PublicDetails__title-field-input').should('not.have.value', '');

          // Fill title and description and submit the step
          cy.getComponent('PublicDetails__title-field-input')
            .clear()
            .type('The title');
          cy.getComponent('PublicDetails__description-field-input').type('A cool description');
          cy.getComponent('WizardForm__next-button').click();

          // Submit the draw
          cy.getComponent('WizardForm__next-button').click();

          cy.mockedRequestWait('POST', '/api/groups')
            .its('requestBody')
            .should('deep.eq', {
              description: 'A cool description',
              number_of_groups: 2,
              participants: [{ name: 'you' }, { name: 'me' }],
              title: 'The title',
            });

          cy.mockedRequestWait('POST', '/api/groups/43c357b7-91ec-448a-a4bf-ac059cc3a374/toss');
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Groups',
            eventAction: 'Publish',
            eventLabel: 'af52a47d-98fd-4685-8510-26d342e16f9b',
          });

          // Redirect to draw with the public id
          cy.location('pathname').should(
            'eq',
            '/groups/af52a47d-98fd-4685-8510-26d342e16f9b/success',
          );
        });

        it('Should show feedback if there are server errors', () => {
          cy.visit('/groups/public');
          cy.route({
            method: 'POST',
            url: '/api/groups/',
            status: 503,
            response: {},
          }).as('failedRequest');
          cy.getComponent('ParticipantsInput__inputField').type('you, me,');
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('WizardForm__next-button').click();
          cy.wait('@failedRequest');
          cy.getComponent('ErrorFeedback').should('be.visible');

          // It should recover form the error
          cy.mockFixture('GroupsGenerator'); // Reset the mock with the 200 response
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('ErrorFeedback').should('not.exist');
        });
      });

      describe('Quick Draw', () => {
        it('Should send pageview events', () => {
          cy.visit('/groups');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/groups' });
        });

        it('Should have a share button that takes the user to the public draw', () => {
          cy.visit('/groups');
          cy.clock();
          cy.getComponent('ParticipantsInput__inputField').type('you, me, him, her,');
          cy.getComponent('SubmitFormButton').click();
          cy.getComponent('ShareDrawButton').click();
          cy.getComponent('ShareDrawButton__confirm').click();
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Groups',
            eventAction: 'Start Public',
            eventLabel: 'From Quick Result',
          });
          cy.location('pathname').should('eq', '/groups/public');
        });

        it('Should contain a working link to the public draw', () => {
          cy.visit('/groups');
          cy.getComponent('MakeCertifiedDrawPanel__button').click();
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Groups',
            eventAction: 'Start Public',
            eventLabel: 'From Scratch',
          });
          cy.location('pathname').should('eq', '/groups/public');
        });

        describe('Create', () => {
          describe('Error feedback', () => {
            it('Should show feedback if there are server errors', () => {
              cy.visit('/groups');
              cy.route({
                method: 'POST',
                url: '/api/groups/',
                status: 503,
                response: {},
              }).as('failedRequest');
              cy.getComponent('ParticipantsInput__inputField').type('one, two,');
              cy.getComponent('SubmitFormButton').click();
              cy.wait('@failedRequest');
              cy.getComponent('ErrorFeedback').should('be.visible');

              // It should recover form the error
              cy.mockFixture('GroupsGenerator'); // Reset the mock with the 200 response
              cy.getComponent('SubmitFormButton').click();
              cy.getComponent('ErrorFeedback').should('not.exist');
            });

            it('Should show error when any required field is empty', () => {
              cy.visit('/groups');

              // Make required errors show up
              cy.getComponent('SubmitFormButton').click();

              // It should error if participants is empty
              cy.getComponent('ParticipantsInput').shouldHaveError();
              cy.getComponent('ParticipantsInput__inputField').type('you, me,');
              cy.getComponent('ParticipantsInput').shouldNotHaveError();

              // It should error if number of groups is empty
              cy.getComponent('GroupsGenerator__number-of-groups-field-input').clear();
              cy.getComponent('GroupsGenerator__number-of-groups-field').shouldHaveError();
              cy.getComponent('GroupsGenerator__number-of-groups-field-input').type(2);
              cy.getComponent('GroupsGenerator__number-of-groups-field').shouldNotHaveError();
            });

            it('Should recover from not enough participants for N groups', () => {
              cy.visit('/groups');
              cy.getComponent('SubmitFormButton').click();
              cy.getComponent('ErrorFeedback').should('be.visible');
              cy.getComponent('ParticipantsInput__inputField').type('one, two,');
              cy.getComponent('ErrorFeedback').should('not.exist');
            });
          });

          it('Should have the right default values', () => {
            cy.visit('/groups');

            cy.getComponent('ParticipantsInput__inputField').should('have.value', '');
            cy.getComponent('GroupsGenerator__number-of-groups-field-input').should(
              'have.value',
              '2',
            );
            cy.getComponent('MultiValueDisplay__chip').should('not.exist');
          });

          it('Request contains the data, results are shown and analytics events sent', () => {
            cy.visit('/groups');
            cy.clock();
            cy.getComponent('ParticipantsInput__inputField').type('you, me, him, her,');
            cy.getComponent('GroupsGenerator__number-of-groups-field-input')
              .clear()
              .type(4);
            cy.getComponent('SubmitFormButton').click();

            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventCategory: 'Groups',
              eventAction: 'Toss',
            });

            cy.mockedRequestWait('POST', '/api/groups')
              .its('requestBody')
              .should('deep.eq', {
                participants: [{ name: 'you' }, { name: 'me' }, { name: 'him' }, { name: 'her' }],
                number_of_groups: 4,
                title: null,
                description: null,
              });

            cy.mockedRequestWait('POST', '/api/groups/43c357b7-91ec-448a-a4bf-ac059cc3a374/toss');
            cy.getComponent('GroupsGeneratorResult__result').should('be.visible');
          });

          it('Changing data after toss should create a new draw', () => {
            cy.visit('/groups');
            cy.clock();
            cy.getComponent('ParticipantsInput__inputField').type('one, two,');
            cy.getComponent('SubmitFormButton').click();
            cy.mockedRequestWait('POST', '/api/groups')
              .its('requestBody.participants')
              .should('deep.eq', [{ name: 'one' }, { name: 'two' }]);
            cy.mockedRequestWait('POST', '/api/groups/43c357b7-91ec-448a-a4bf-ac059cc3a374/toss');
            cy.getComponent('GroupsGeneratorResult__result').should('be.visible');
            cy.getComponent('ParticipantsInput__inputField').type('three,');
            cy.getComponent('SubmitFormButton').click();

            // A new draw should be created and tossed
            cy.mockedRequestWait('POST', '/api/groups')
              .its('requestBody.participants')
              .should('deep.eq', [{ name: 'one' }, { name: 'two' }, { name: 'three' }]);
            cy.mockedRequestWait('POST', '/api/groups/43c357b7-91ec-448a-a4bf-ac059cc3a374/toss');
          });
        });
      });

      describe('Published page', () => {
        it.only('Analytics events sent on pageview', () => {
          beforeEach(() => mockServer.start(5007));
          mockServer
            .get('/api/groups/af52a47d-98fd-4685-8510-26d342e16f9b')
            .thenReply(200, 'A mocked response');
          cy.visit('/groups/af52a47d-98fd-4685-8510-26d342e16f9b');

          cy.wait(50000);

          afterEach(() => mockServer.stop());
          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', {
              hitType: 'pageview',
              page: '/groups/af52a47d-98fd-4685-8510-26d342e16f9b',
            });
        });

        it('Should show the countdown if there are not results', () => {
          cy.clock(new Date().getTime());
          const missingSeconds = 2;

          cy.fixture('GroupsGenerator').then(fixtures => {
            const now = new Date();
            now.setSeconds(now.getSeconds() + missingSeconds);
            const dateInFuture = now.toISOString();
            const fixtureGetDraw = fixtures.find(
              fixture => fixture.path === '/api/groups/af52a47d-98fd-4685-8510-26d342e16f9b',
            );
            fixtureGetDraw.response.results[0].schedule_date = dateInFuture;
            fixtureGetDraw.response.results[0].value = null;
            cy.route(fixtureGetDraw.method, fixtureGetDraw.path, fixtureGetDraw.response).as(
              'LoadData',
            );
          });
          cy.visit('/groups/af52a47d-98fd-4685-8510-26d342e16f9b');
          cy.wait('@LoadData');
          cy.getComponent('Countdown').should('be.visible');

          // Fast forward the countdown
          cy.tick((missingSeconds + 1) * 1000);

          // Once the countdown is over, the the api should be called again
          cy.wait('@LoadData');
        });

        it('Should show results and the groups draw details', () => {
          cy.visit('/groups/af52a47d-98fd-4685-8510-26d342e16f9b');
          cy.mockedRequestWait('GET', '/api/groups/af52a47d-98fd-4685-8510-26d342e16f9b');
          cy.getComponent('DrawHeading__title').contains('Sorteo de grupos aleatorios');
          cy.getComponent('GroupsGeneratorResult__group').should('have.length', 2);
          cy.getComponent('GroupsGeneratorResult__group')
            .eq(0)
            .contains('participant2');
          cy.getComponent('GroupsGeneratorResult__group')
            .eq(1)
            .contains('participant1');
        });

        it('Should show share buttons', () => {
          cy.mockWindowOpen();
          cy.visit('/groups/af52a47d-98fd-4685-8510-26d342e16f9b');
          cy.getComponent('SocialButton__whatsapp').click();
          cy.get('@ga').and('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Groups',
            eventAction: 'Social Share Draw',
            eventLabel: 'whatsapp',
          });
          cy.get('@winOpen').and('be.calledOnce');
        });
      });
    });
  });
});
