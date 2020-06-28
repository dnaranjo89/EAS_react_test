describe('Roll Dice Page', () => {
  ['macbook-13' /* , 'iphone-5' */].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.viewport(device);
      });

      it('Should have the correct OG tags on SSR', () => {
        cy.request('dice')
          .its('body')
          .then(html => {
            expect(html).to.match(/<meta property="og:image".*dice_og_image([^>]+)/);
            expect(html).to.match(/<meta property="og:title".*Lanza unos dados([^>]+)/);
          });
      });

      it('Should send GA pageview', () => {
        cy.mockGA();
        cy.visit('/dice');
        cy.get('@ga')
          .should('be.calledWith', 'create', 'UA-XXXXX-Y')
          .and('be.calledWith', 'send', { hitType: 'pageview', page: '/dice' });
      });

      it('Analytics pageview and event on toss', () => {
        cy.mockGA();
        cy.visit('/dice');

        cy.get('@ga')
          .should('be.calledWith', 'create', 'UA-XXXXX-Y')
          .and('be.calledWith', 'send', { hitType: 'pageview', page: '/dice' });

        cy.findByRole('button', { name: /lanzar/i }).click();
        cy.get('@ga').should('be.calledWith', 'send', {
          hitType: 'event',
          eventCategory: 'Dice',
          eventAction: 'Toss',
        });
      });
    });
  });
});
