describe('Flip a Coin Page', () => {
  ['macbook-13' /* , 'iphone-5' */].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.viewport(device);
      });
      it('Should send GA pageview', () => {
        cy.mockGA();
        cy.visit('/coin');
        cy.get('@ga')
          .should('be.calledWith', 'create', 'UA-XXXXX-Y')
          .and('be.calledWith', 'send', { hitType: 'pageview', page: '/coin' });
      });

      it('Analytics pageview and event on toss', () => {
        cy.mockGA();
        cy.visit('/coin');

        cy.get('@ga')
          .should('be.calledWith', 'create', 'UA-XXXXX-Y')
          .and('be.calledWith', 'send', { hitType: 'pageview', page: '/coin' });

        cy.getComponent('FlipCoinPage__coin').click();
        cy.get('@ga').should('be.calledWith', 'send', {
          hitType: 'event',
          eventCategory: 'Coin',
          eventAction: 'Toss',
        });
      });

      it('Clicking the coin should make it spin and show result', () => {
        cy.visit('/coin');
        cy.get('[class*="FlipCoinPage__coin--"]').should('not.exist');
        cy.get('[class*="FlipCoinPage__result--animated"]').should('not.exist');
        cy.getComponent('FlipCoinPage__coin').click();
        cy.get('[class*="FlipCoinPage__coin--"]').should('exist');
        cy.get('[class*="FlipCoinPage__result--animated"]').should('exist');
      });
    });
  });
});
