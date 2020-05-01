describe('Spin Arrow Page', () => {
  ['macbook-13', 'iphone-5'].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.viewport(device);
      });

      it('Analytics pageview and event on toss', () => {
        cy.mockGA();
        cy.visit('/spinner');

        cy.get('@ga')
          .should('be.calledWith', 'create', 'UA-XXXXX-Y')
          .and('be.calledWith', 'send', { hitType: 'pageview', page: '/spinner' });

        cy.getComponent('SpinArrow__arrow').click();
        cy.get('@ga').should('be.calledWith', 'send', {
          hitType: 'event',
          eventCategory: 'Spin Arrow',
          eventAction: 'Toss',
        });
      });

      it('Clicking the arrow should make it spin', () => {
        cy.visit('/spinner');
        cy.getComponent('SpinArrow__arrow').click();
        cy.getComponent('SpinArrow__arrow')
          .should('have.css', 'transform')
          .and('contain', 'matrix');
      });
    });
  });
});
