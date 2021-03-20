describe('Groups Generator Page', () => {
  ['macbook-13' /* , 'iphone-5' */].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.mockFixture('GroupsGenerator');
        cy.mockGA();
        cy.viewport(device);
      });

      describe('Quick Draw', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/groups')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*groups_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*Grupos Aleatorios([^>]+)/);
            });
        });
        it('Should send pageview events', () => {
          cy.visit('/groups');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', { hitType: 'pageview', page: '/groups' });
        });

        describe('Access a quick draw', () => {
          it('The configuration is pre loaded and the latest result is shown', () => {
            cy.visit('/groups/43c357b7-91ec-448a-0000-ac059cc3a374');

            cy.contains('david').should('be.visible');
            cy.contains('pepa').should('be.visible');
            cy.contains('pepito').should('be.visible');
            cy.contains('maria').should('be.visible');
            cy.getComponent('GroupsGenerator__number-of-groups-field-input').should(
              'have.value',
              '2',
            );

            // Latest result is visible
            cy.contains('Grupo 1').should('be.visible');
            cy.contains('Grupo 2').should('be.visible');
          });

          it('Changing data after toss should create a new draw', () => {
            cy.fixture('GroupsGenerator').then(fixtures => {
              const fixtureCreateGroups = fixtures.find(fixture => fixture.path === '/api/groups/');
              const newResponse = {
                ...fixtureCreateGroups.response,
                private_id: '43c357b7-91ec-448a-0000-ac059cc3a555',
              };

              cy.route(fixtureCreateGroups.method, fixtureCreateGroups.path, newResponse).as(
                `newDrawCreated`,
              );
            });
            cy.visit('/groups/43c357b7-91ec-448a-0000-ac059cc3a374');
            cy.getComponent('ParticipantsInput__inputField').type('peter,');
            cy.getComponent('SubmitFormButton').click();

            // A new draw should be created and tossed
            cy.wait('@newDrawCreated')
              .its('requestBody.participants')
              .should('deep.eq', [
                { name: 'david' },
                { name: 'pepito' },
                { name: 'maria' },
                { name: 'pepa' },
                { name: 'peter' },
              ]);
            cy.mockedRequestWait('POST', '/api/groups/43c357b7-91ec-448a-0000-ac059cc3a555/toss/');
          });
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
            cy.getComponent('ParticipantsInput__inputField').type('you, me, him, her,');
            cy.getComponent('GroupsGenerator__number-of-groups-field-input').clear().type(4);
            cy.getComponent('SubmitFormButton').click();

            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventCategory: 'Groups',
              eventAction: 'Toss',
            });

            cy.mockedRequestWait('POST', '/api/groups/')
              .its('requestBody')
              .should('deep.eq', {
                participants: [{ name: 'you' }, { name: 'me' }, { name: 'him' }, { name: 'her' }],
                number_of_groups: 4,
                title: null,
                description: null,
                metadata: [{ client: 'web', key: 'isQuickDraw', value: 'true' }],
              });

            cy.mockedRequestWait('POST', '/api/groups/43c357b7-91ec-448a-0000-ac059cc3a374/toss/');
            cy.getComponent('GroupsGeneratorResult__result').should('be.visible');
          });
        });
      });

      describe('Public Draw', () => {
        beforeEach(() => {
          cy.fixture('GroupsGenerator').then(fixtures => {
            const fixtureCreateGroups = fixtures.find(fixture => fixture.path === '/api/groups/');
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
          cy.request('/groups/public')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*groups_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*Grupos Aleatorios([^>]+)/);
            });
        });

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
              eventLabel: '43c357b7-91ec-448a-1111-111111111111',
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
          cy.getComponent('PublicDetails__title-field-input').clear().type('The title');
          cy.getComponent('PublicDetails__description-field-input').type('A cool description');
          cy.getComponent('WizardForm__next-button').click();

          // Submit the draw
          cy.getComponent('WizardForm__next-button').click();

          cy.mockedRequestWait('POST', '/api/groups/')
            .its('requestBody')
            .should('deep.eq', {
              description: 'A cool description',
              number_of_groups: 2,
              participants: [{ name: 'you' }, { name: 'me' }],
              title: 'The title',
              metadata: [{ client: 'web', key: 'isQuickDraw', value: 'false' }],
            });

          cy.mockedRequestWait('POST', '/api/groups/43c357b7-91ec-448a-1111-000000000000/toss/');
          cy.get('@ga').should('be.calledWith', 'send', {
            hitType: 'event',
            eventCategory: 'Groups',
            eventAction: 'Publish',
            eventLabel: '43c357b7-91ec-448a-1111-111111111111',
          });

          // Redirect to draw with the public id
          cy.location('pathname').should(
            'eq',
            '/groups/43c357b7-91ec-448a-1111-111111111111/success',
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

      describe('Published page', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('/groups/43c357b7-91ec-448a-1111-111111111111')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*groups_og_image([^>]+)/);
              expect(html).to.match(
                /<meta property="og:title".*Sorteo de grupos aleatorios([^>]+)/,
              );
            });
        });
        it('Analytics events sent on pageview', () => {
          cy.visit('/groups/43c357b7-91ec-448a-1111-111111111111');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', {
              hitType: 'pageview',
              page: '/groups/43c357b7-91ec-448a-1111-111111111111',
            });
        });

        it('Should show results and the groups draw details', () => {
          cy.visit('/groups/43c357b7-91ec-448a-1111-111111111111');
          cy.getComponent('DrawHeading__title').contains('Sorteo de grupos aleatorios');
          cy.getComponent('GroupsGeneratorResult__group').should('have.length', 2);
          cy.getComponent('GroupsGeneratorResult__group').eq(0).contains('participant2');
          cy.getComponent('GroupsGeneratorResult__group').eq(1).contains('participant1');
        });

        it('Should show share buttons', () => {
          cy.mockWindowOpen();
          cy.visit('/groups/43c357b7-91ec-448a-1111-111111111111');
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
