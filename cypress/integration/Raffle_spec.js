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
    });
  });
  describe('Published page', () => {
    it('Information about the raffle should be displayed', () => {
      // cy.visit('/raffle/123456');
      // cy.getComponent('PublishedRafflePage__Title').contains('Sorteo de Navidad');
    });
  });
});
