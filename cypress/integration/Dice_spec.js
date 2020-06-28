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
            expect(html).to.match(/<meta property="og:title".*Lanzar dados([^>]+)/);
          });
      });

      it('Should send GA pageview', () => {
        cy.mockGA();
        cy.visit('/dice');
        cy.get('@ga')
          .should('be.calledWith', 'create', 'UA-XXXXX-Y')
          .and('be.calledWith', 'send', { hitType: 'pageview', page: '/dice' });
      });
    });
  });
});
