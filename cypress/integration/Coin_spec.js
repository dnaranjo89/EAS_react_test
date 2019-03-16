describe('Flip a Coin Page', () => {
  ['macbook-13', 'iphone-5'].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.mockFixture('GroupsGenerator');
        cy.viewport(device);
      });
      it('Should send GA pageview', () => {
        cy.mockGA();
        cy.visit('/draw/new/coin');
        cy.get('@ga')
          .should('be.calledWith', 'create', 'UA-XXXXX-Y')
          .and('be.calledWith', 'send', { hitType: 'pageview', page: '/draw/new/coin' });
      });

      it('Analytics pageview and event on toss', () => {
        cy.mockGA();
        cy.route('GET', 'https://api.mixpanel.com/track/*').as('startMixpanel');
        cy.route('GET', 'https://api.mixpanel.com/decide/*').as('trackMixpanel');
        cy.visit('/draw/new/coin');
        cy.wait('@startMixpanel');
        cy.wait('@trackMixpanel');

        cy.get('@ga')
          .should('be.calledWith', 'create', 'UA-XXXXX-Y')
          .and('be.calledWith', 'send', { hitType: 'pageview', page: '/draw/new/coin' });

        cy.getComponent('FlipCoinPage__coin').click();
        cy.get('@ga').should('be.calledWith', 'send', {
          hitType: 'event',
          eventCategory: 'Coin',
          eventAction: 'Toss',
        });
      });

      it('Clicking the coin should make it spin', () => {
        cy.visit('/draw/new/coin');
        cy.get('[class*="FlipCoinPage__coin--"]').should('not.exist');
        cy.getComponent('FlipCoinPage__coin').click();
        cy.get('[class*="FlipCoinPage__coin--"]').should('exist');
      });
    });
  });
});
