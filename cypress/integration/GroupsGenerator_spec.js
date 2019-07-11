describe('Groups Generator Page', () => {
  ['macbook-13', 'iphone-5'].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.mockFixture('GroupsGenerator');
        cy.viewport(device);
      });

      describe('Creation Page', () => {
        it('Should show feedback if there are server errors', () => {
          cy.visit('/draw/new/groups');
          cy.route({
            method: 'POST',
            url: '/api/groups/',
            status: 503,
            response: {},
          }).as('failedRequest');
          cy.getComponent('GroupsGenerator__participants-field-input').type('one, two,');
          cy.getComponent('SubmitDrawButton').click();
          cy.wait('@failedRequest');
          cy.getComponent('ErrorFeedback').should('be.visible');

          // It should recover form the error
          cy.mockFixture('GroupsGenerator'); // Reset the mock with the 200 response
          cy.getComponent('SubmitDrawButton').click();
          cy.getComponent('ErrorFeedback').should('not.exist');
        });

        it('Fields have the right default values', () => {
          cy.visit('/draw/new/groups');

          cy.getComponent('GroupsGenerator__participants-field-input').should('have.value', '');
          cy.getComponent('GroupsGenerator__number-of-groups-field-input').should(
            'have.value',
            '2',
          );
          cy.getComponent('MultiValueDisplay__chip').should('not.exist');
        });

        it('Analytics pageview and event on toss', () => {
          cy.mockGA();
          cy.route('GET', 'https://api.mixpanel.com/track/*').as('startMixpanel');
          cy.route('GET', 'https://api.mixpanel.com/decide/*').as('trackMixpanel');
          cy.visit('/draw/new/groups');
          cy.wait('@startMixpanel');
          cy.wait('@trackMixpanel');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/draw/new/groups' });

          cy.getComponent('GroupsGenerator__participants-field-input').type('you, me, him, her,');
          cy.getComponent('SubmitDrawButton').click();
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Groups',
            eventAction: 'Toss',
          });
        });

        it('Request sent contains the right data and results are shown', () => {
          cy.visit('/draw/new/groups');
          cy.clock();
          cy.getComponent('GroupsGenerator__participants-field-input').type('you, me, him, her,');
          cy.getComponent('GroupsGenerator__number-of-groups-field-input')
            .clear()
            .type(4);
          cy.getComponent('SubmitDrawButton').click();
          cy.tick(4000); // Fast forward the loading animation
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
          cy.visit('/draw/new/groups');
          cy.clock();
          cy.getComponent('GroupsGenerator__participants-field-input').type('one, two,');
          cy.getComponent('SubmitDrawButton').click();
          cy.mockedRequestWait('POST', '/api/groups')
            .its('requestBody.participants')
            .should('deep.eq', [{ name: 'one' }, { name: 'two' }]);
          cy.tick(4000); // Fast forward the loading animation
          cy.mockedRequestWait('POST', '/api/groups/43c357b7-91ec-448a-a4bf-ac059cc3a374/toss');
          cy.getComponent('GroupsGeneratorResult__result').should('be.visible');
          cy.getComponent('GroupsGenerator__participants-field-input').type('three,');
          cy.getComponent('SubmitDrawButton').click();

          // A new draw should be created and tossed
          cy.mockedRequestWait('POST', '/api/groups')
            .its('requestBody.participants')
            .should('deep.eq', [{ name: 'one' }, { name: 'two' }, { name: 'three' }]);
          cy.mockedRequestWait('POST', '/api/groups/43c357b7-91ec-448a-a4bf-ac059cc3a374/toss');
        });

        it('Should have a share button that takes the user to the public draw', () => {
          cy.visit('/draw/new/groups');
          cy.getComponent('GroupsGenerator__participants-field-input').type('one, two,');
          cy.getComponent('SubmitDrawButton').click();
          cy.getComponent('ShareDrawButton').click();
          cy.getComponent('ShareDrawButton__cancel').click();
          cy.getComponent('ShareDrawButton').click();
          cy.getComponent('ShareDrawButton__confirm').click();
          cy.location('pathname').should('eq', '/groups/public');
        });

        it('Should contain a working link to the public draw', () => {
          cy.visit('/draw/new/groups');
          cy.getComponent('MakeCertifiedDrawPanel__button').click();
          cy.location('pathname').should('eq', '/groups/public');
        });

        describe('Invalid configurations', () => {
          it('Should show error when any required field is empty', () => {
            cy.visit('/draw/new/groups');
            cy.getComponent('GroupsGenerator__participants-field').within(() => {
              cy.getComponent('GroupsGenerator__participants-field-input').type('one,');
              cy.getError().should('not.exist');
              cy.get('[class*="delete"]').click();
              cy.getComponent('GroupsGenerator__participants-field-input').clear();
              cy.getError().should('be.visible');

              // It should recover from not enough
              cy.getComponent('GroupsGenerator__participants-field-input').type('one,');
              cy.getError().should('not.exist');
            });

            cy.getComponent('GroupsGenerator__number-of-groups-field').within(() => {
              cy.getComponent('GroupsGenerator__number-of-groups-field-input').clear();
              cy.getError().should('be.visible');

              cy.getComponent('GroupsGenerator__number-of-groups-field-input')
                .clear()
                .type(0);
              cy.getError().should('be.visible');

              cy.getComponent('GroupsGenerator__number-of-groups-field-input')
                .clear()
                .type(2);
              cy.getError().should('not.exist');
            });
          });

          it('Should recover from not enough participants for N groups', () => {
            cy.visit('/draw/new/groups');
            cy.getComponent('SubmitDrawButton').click();
            cy.getComponent('ErrorFeedback').should('be.visible');
            cy.getComponent('GroupsGenerator__participants-field-input').type('one, two,');
            cy.getComponent('ErrorFeedback').should('not.exist');
          });
        });
      });

      describe('Published page', () => {
        it('Should send GA pageview', () => {
          cy.mockGA();
          cy.visit('/groups/af52a47d-98fd-4685-8510-26d342e16f9b');
          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', {
              hitType: 'pageview',
              page: '/groups/af52a47d-98fd-4685-8510-26d342e16f9b',
            });
        });

        it('Should show the countdown if there are not results', () => {
          const now = new Date();
          const missingSeconds = 2;
          now.setSeconds(now.getSeconds() + missingSeconds);
          const dateInFuture = now.toISOString();
          cy.fixture('GroupsGenerator').then(fixtures => {
            const fixtureGetRaffle = fixtures.find(
              fixture => fixture.path === '/api/groups/af52a47d-98fd-4685-8510-26d342e16f9b',
            );
            fixtureGetRaffle.response.results[0].schedule_date = dateInFuture;
            fixtureGetRaffle.response.results[0].value = null;
            cy.route(fixtureGetRaffle.method, fixtureGetRaffle.path, fixtureGetRaffle.response).as(
              'LoadDataResultsPending',
            );
          });
          cy.visit('/groups/af52a47d-98fd-4685-8510-26d342e16f9b');
          cy.fixture('GroupsGenerator').then(fixtures => {
            const fixtureGetRaffle = fixtures.find(
              fixture => fixture.path === '/api/groups/af52a47d-98fd-4685-8510-26d342e16f9b',
            );
            cy.route(fixtureGetRaffle.method, fixtureGetRaffle.path, fixtureGetRaffle.response).as(
              'LoadDataResultsPublished',
            );
          });
          cy.wait('@LoadDataResultsPending');
          cy.getComponent('Countdown').should('be.visible');

          // Once the countdown is over, the the api should be called again
          cy.wait('@LoadDataResultsPublished');
        });

        it('Should show results and the groups draw details', () => {
          cy.visit('/groups/af52a47d-98fd-4685-8510-26d342e16f9b');
          cy.mockedRequestWait('GET', '/api/groups/af52a47d-98fd-4685-8510-26d342e16f9b');
          cy.getComponent('PublishedGroupsGeneratorPage__Title').contains(
            'Sorteo de grupos aleatorios',
          );
          cy.getComponent('GroupsGeneratorResult__group').should('have.length', 2);
          cy.getComponent('GroupsGeneratorResult__group')
            .eq(0)
            .contains('participant2');
          cy.getComponent('GroupsGeneratorResult__group')
            .eq(1)
            .contains('participant1');
        });
      });
    });
  });
});
