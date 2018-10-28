describe('Raffle', () => {
  beforeEach(() => {
    cy.server();
    cy.mockFixture('Raffle');
  });

  describe('Creation page', () => {
    it('Google Analytics pageview event is sent', () => {
      cy.mockGA();
      cy.visit('/raffle');

      cy.get('@ga')
        .should('be.calledWith', 'create', 'UA-XXXXX-Y')
        .and('be.calledWith', 'send', { hitType: 'pageview', page: '/raffle' });
    });

    it('It should be possible to create a raffle', () => {
      cy.visit('/raffle');

      // Attempt to submit step without filling the fields
      cy.getComponent('WizzardForm__next-button').click();

      // Both fields should error as they are required
      cy.getComponent('PublicDetails__title-field').within(() => {
        cy.getError().should('be.visible');
      });
      cy.getComponent('PublicDetails__description-field').within(() => {
        cy.getError().should('be.visible');
      });

      // Fill the title and its error should recover
      cy.getComponent('PublicDetails__title-field-input').type('The title');
      cy.getComponent('PublicDetails__title-field').within(() => {
        cy.getError().should('not.exist');
      });

      // Fill the description and its error should recover
      cy.getComponent('PublicDetails__description-field-input').type('A cool description');
      cy.getComponent('PublicDetails__description-field').within(() => {
        cy.getError().should('not.exist');
      });

      // Go to second step
      cy.getComponent('WizzardForm__next-button').click();

      // Attempt to submit step without filling the fields
      cy.getComponent('WizzardForm__next-button').click();

      // Participants field should error as it is required
      cy.getComponent('Raffle__participants-field').within(() => {
        cy.getError().should('be.visible');
      });

      cy.getComponent('Raffle__participants-field-input').type('Participant 1, Participant 2,');

      // Go to third step
      cy.getComponent('WizzardForm__next-button').click();

      // Attempt to submit step without filling the fields
      cy.getComponent('WizzardForm__next-button').click();

      // Participants field should error as it is required
      cy.getComponent('Raffle__prizes-field').within(() => {
        cy.getError().should('be.visible');
      });

      cy.getComponent('Raffle__prizes-field-input').type('Prize 1,');

      // Go to fourth step
      cy.getComponent('WizzardForm__next-button').click();

      cy.getComponent('WizzardForm__next-button').click();

      cy.mockedRequestWait('POST', '/api/raffle')
        .its('requestBody')
        .should('deep.eq', {
          title: 'The title',
          description: 'A cool description',
          participants: [{ name: 'Participant 1' }, { name: 'Participant 2' }],
          prizes: [{ name: 'Prize 1' }],
        });
      cy.mockedRequestWait('POST', '/api/raffle/29080f6b-b3e4-412c-8008-7e26081ea17c/toss');
      cy.location('pathname').should('eq', '/raffle/29080f6b-b3e4-412c-8008-7e26081ea17c');
    });
  });
  describe('Published page', () => {
    it('Google Analytics pageview event is sent', () => {
      cy.mockGA();
      cy.visit('/raffle/29080f6b-b3e4-412c-8008-7e26081ea17c');
      cy.get('@ga')
        .should('be.calledWith', 'create', 'UA-XXXXX-Y')
        .and('be.calledWith', 'send', {
          hitType: 'pageview',
          page: '/raffle/29080f6b-b3e4-412c-8008-7e26081ea17c',
        });
    });
    it('Should show the countdown if there are not results', () => {
      const now = new Date();
      now.setHours(now.getHours() + 1);
      const dateInFuture = now.toISOString();
      cy.route({
        method: 'GET',
        url: '/api/raffle/29080f6b-b3e4-412c-8008-7e26081ea17c',
        status: 200,
        response: {
          id: '79a8d152-d965-465c-90fd-ceb86efc39cb',
          created_at: '2018-10-28T12:10:49.409170Z',
          updated_at: '2018-10-28T12:10:49.409296Z',
          title: 'This is the title',
          description: "That's a nice description",
          results: [
            {
              created_at: '2018-10-28T12:10:49.469348Z',
              value: null,
              schedule_date: dateInFuture,
            },
          ],
          metadata: [],
          private_id: '86a7eae4-5cfc-497b-a30e-48e2f77836ce',
          prizes: [
            {
              id: 'b5e9426c-fdc7-49e3-a11f-3ee87c7f77ec',
              created_at: '2018-10-28T12:10:49.425183Z',
              name: 'Prize one',
              url: null,
            },
          ],
          participants: [
            {
              id: '2b020a30-49eb-4909-8caf-b1672807cdaf',
              created_at: '2018-10-28T12:10:49.426936Z',
              name: 'Participant 1',
              facebook_id: null,
            },
          ],
        },
      }).as('request');
      cy.visit('/raffle/29080f6b-b3e4-412c-8008-7e26081ea17c');
      cy.wait('@request');
      cy.getComponent('Countdown').should('be.visible');
    });
    it('Should show results and the raffle details', () => {
      cy.visit('/raffle/29080f6b-b3e4-412c-8008-7e26081ea17c');
      cy.mockedRequestWait('GET', '/api/raffle/29080f6b-b3e4-412c-8008-7e26081ea17c');
      cy.getComponent('PublishedRafflePage__Title').contains('This is the title');
      cy.getComponent('WinnerChip').should('have.length', 1);

      // Non winners should not be shown
      cy.contains('Participant 1').should('not.exist');
    });
  });
});
