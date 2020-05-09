describe.skip('RecentRaffles', () => {
  beforeEach(() => {
    cy.server();
    const mockRecentDraws = [
      {
        id: '8f393558-320e-4603-ad4d-00000000000',
        title: 'A Raffle',
        url: '/groups/8f393558-320e-4603-ad4d-00000000000',
      },
      {
        id: '8f393558-320e-4603-ad4d-0ef8b5395698',
        title: 'Sorteo de grupos aleatorios',
        url: '/groups/8f393558-320e-4603-ad4d-0ef8b5395698',
      },
    ];
    window.localStorage.setItem('recentDraws', JSON.stringify(mockRecentDraws));
  });

  ['macbook-13', 'iphone-5'].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.viewport(device);
      });

      it('Analytics events are sent', () => {
        cy.mockGA();
        cy.visit('/recent');

        cy.get('@ga')
          .should('be.calledWith', 'create', 'UA-XXXXX-Y')
          .and('be.calledWith', 'send', { hitType: 'pageview', page: '/recent' });
      });

      it('Should show the empty list if there are not recent raffles', () => {
        window.localStorage.removeItem('recentDraws');
        cy.visit('/recent');
        cy.getComponent('RecentDraws__list-empty').should('be.visible');
      });

      it('Recent raffles should have working links', () => {
        cy.visit('/recent');
        cy.getComponent('RecentDraws__list-item').within(() => {
          cy.root().should('have.length', 2);
          cy.root().first().click();
          cy.location('pathname').should('eq', '/groups/8f393558-320e-4603-ad4d-00000000000');
        });
      });

      it('Should be possible to clear recent draws', () => {
        cy.visit('/recent');
        cy.getComponent('RecentDraws__list-item').should('have.length', 2);
        cy.getComponent('RecentDraws__clear-history').click();
        cy.getComponent('RecentDraws__modal-confirm')
          .click()
          .should(() => {
            expect(localStorage.getItem('recentDraws')).to.eq(null);
          });
        cy.getComponent('RecentDraws__list-item').should('have.length', 0);
      });

      it('Should be possible to remove an individual draw', () => {
        cy.visit('/recent');
        cy.getComponent('RecentDraws__list-item').should('have.length', 2);
        cy.getComponent('RecentDraws__remove-draw').first().click();
        cy.getComponent('RecentDraws__modal-confirm').click();
        cy.getComponent('RecentDraws__list-item').should('have.length', 1);
      });
    });
  });
});
