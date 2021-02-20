describe('SecretSanta', () => {
  ['macbook-13' /* , 'iphone-5' */].forEach(device => {
    context(`Device ${device}`, () => {
      beforeEach(() => {
        cy.server();
        cy.mockGA();
        cy.mockFixture('SecretSanta');
        cy.viewport(device);
      });

      describe('Public Draw', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('secret-santa')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*secret_santa_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*Amigo invisible([^>]+)/);
            });
        });

        describe('Creation page', () => {
          it('Google Analytics pageview event is sent', () => {
            cy.visit('/secret-santa');

            cy.get('@ga')
              .should('be.calledWith', 'create', 'UA-XXXXX-Y')
              .and('be.calledWith', 'send', { hitType: 'pageview', page: '/secret-santa' });
          });

          it('It should be possible to create a raffle', () => {
            cy.visit('/secret-santa');

            // Make required errors show up
            cy.getComponent('WizardForm__next-button').click();

            // It should error if there are no enough participants is empty
            cy.getComponent('ParticipantsInput').shouldHaveError();
            cy.findAllByText(/Tienes que añadir al menos 3 participantes/i);

            cy.findByRole('textbox', { name: /Nombre/i }).type('David');
            cy.findByRole('textbox', { name: /email/i }).type('David@asd.fgh');
            cy.findByRole('button', { name: /añadir/i }).click();
            cy.findByText('David (David@asd.fgh)').should('exist');

            cy.findByRole('textbox', { name: /Nombre/i }).type('Pedro');
            cy.findByRole('textbox', { name: /email/i }).type('Pedro@asd.fgh');
            cy.findByRole('button', { name: /añadir/i }).click();
            cy.findByText('Pedro (Pedro@asd.fgh)').should('exist');

            cy.findByRole('textbox', { name: /Nombre/i }).type('Mario');
            cy.findByRole('textbox', { name: /email/i }).type('Mario@asd.fgh');
            cy.findByRole('button', { name: /añadir/i }).click();
            cy.findByText('Mario (Mario@asd.fgh)').should('exist');

            // Should not be possible to add duplicated names or emails
            cy.findByRole('textbox', { name: /Nombre/i }).type('David');
            cy.findByRole('textbox', { name: /email/i }).type('David@asd.fgh');
            cy.findByRole('button', { name: /añadir/i }).click();
            cy.findByText(/Éste nombre ya aparece en la lista de participantes/i).should('exist');
            cy.findByRole('textbox', { name: /Nombre/i })
              .clear()
              .type('Marina');
            cy.findByRole('button', { name: /añadir/i }).click();
            cy.findByText(/Éste email ya aparece en la lista de participantes/i).should('exist');
            cy.findByRole('textbox', { name: /email/i }).clear().type('Marina@asd.fgh');
            cy.findByRole('button', { name: /añadir/i }).click();
            cy.findByText('Marina (Marina@asd.fgh)').should('exist');

            // Remove the last participant
            cy.findByRole('button', { name: /Eliminar a Marina/i }).click();
            cy.findByText('Marina (Marina@asd.fgh)').should('not.exist');

            cy.getComponent('ParticipantsInput').shouldNotHaveError();

            // Go to second step
            cy.getComponent('WizardForm__next-button').click();

            // Add a exclusion
            cy.findByRole('textbox', { name: /participante/i }).type('David');
            cy.findByRole('option', { name: /david/i }).click();
            cy.findByRole('textbox', { name: /no puede regalar a/i }).type('Mario');
            cy.findByRole('option', { name: /mario/i }).click();
            cy.findByRole('button', { name: /añadir/i }).click();

            cy.findByText(/David No puede regalar a Mario/i).should('exist');

            // Add another exclusion with multiple participants excluded

            cy.findByRole('textbox', { name: /participante/i }).type('Pedro');
            cy.findByRole('option', { name: /pedro/i }).click();
            cy.findByRole('textbox', { name: /no puede regalar a/i }).type('Mario');
            cy.findByRole('option', { name: /mario/i }).click();
            cy.findByRole('textbox', { name: /no puede regalar a/i }).type('David');
            cy.findByRole('option', { name: /david/i }).click();
            cy.findByRole('button', { name: /añadir/i }).click();
            cy.findByText(/Pedro No puede regalar a Mario, David/i).should('exist');

            // Remove the first exclusion
            cy.findByRole('button', { name: /Eliminar exclusiones de David/i }).click();
            cy.findByText(/David No puede regalar a Mario/i).should('not.exist');

            // Go to third step
            cy.getComponent('WizardForm__next-button').click();

            // Submit the draw
            cy.getComponent('WizardForm__next-button').click();

            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventCategory: 'Secret Santa',
              eventAction: 'Publish',
            });

            cy.mockedRequestWait('POST', '/api/secret-santa/')
              .its('requestBody')
              .should('deep.eq', {
                participants: [
                  { name: 'David', email: 'David@asd.fgh', exclusions: [] },
                  { name: 'Pedro', email: 'Pedro@asd.fgh', exclusions: ['Mario', 'David'] },
                  { name: 'Mario', email: 'Mario@asd.fgh', exclusions: [] },
                ],
                language: 'es',
              });
            cy.get('@ga').should('be.calledWith', 'send', {
              hitType: 'event',
              eventCategory: 'Secret Santa',
              eventAction: 'Publish',
            });

            // Redirect to draw with the success page
            cy.location('pathname').should('eq', '/secret-santa/success');
          });
        });

        it('Should show feedback if there are server errors', () => {
          cy.visit('/secret-santa');
          cy.route({
            method: 'POST',
            url: '/api/secret-santa/',
            status: 503,
            response: {},
          }).as('failedRequest');
          cy.findByRole('textbox', { name: /Nombre/i }).type('David');
          cy.findByRole('textbox', { name: /email/i }).type('David@asd.fgh');
          cy.findByRole('button', { name: /añadir/i }).click();
          cy.findByText('David (David@asd.fgh)').should('exist');

          cy.findByRole('textbox', { name: /Nombre/i }).type('Pedro');
          cy.findByRole('textbox', { name: /email/i }).type('Pedro@asd.fgh');
          cy.findByRole('button', { name: /añadir/i }).click();
          cy.findByText('Pedro (Pedro@asd.fgh)').should('exist');

          cy.findByRole('textbox', { name: /Nombre/i }).type('Mario');
          cy.findByRole('textbox', { name: /email/i }).type('Mario@asd.fgh');
          cy.findByRole('button', { name: /añadir/i }).click();
          cy.findByText('Mario (Mario@asd.fgh)').should('exist');

          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('WizardForm__next-button').click();

          // Should show 500
          cy.getComponent('WizardForm__next-button').click();
          cy.wait('@failedRequest');
          cy.getComponent('ErrorFeedback').should('be.visible');
          cy.findByText(/Estamos teniendo problemas/i).should('exist');

          // Should show bad request error with details
          cy.route({
            method: 'POST',
            url: '/api/secret-santa/',
            status: 400,
            response: {},
          }).as('failedRequest');
          cy.getComponent('WizardForm__next-button').click();
          cy.wait('@failedRequest');
          cy.getComponent('ErrorFeedback').should('be.visible');
          cy.findByText(/No es posible emparejar a los participantes/i).should('exist');

          // It should recover form the error
          cy.mockFixture('SecretSanta'); // Reset the mock with the 200 response
          cy.getComponent('WizardForm__next-button').click();
          cy.getComponent('ErrorFeedback').should('not.exist');
        });
      });

      describe('Result page', () => {
        it('Should have the correct OG tags on SSR', () => {
          cy.request('secret-santa/c5d05f6e-03e5-4cea-8996-9e54aa9233e1')
            .its('body')
            .then(html => {
              expect(html).to.match(/<meta property="og:image".*secret_santa_og_image([^>]+)/);
              expect(html).to.match(/<meta property="og:title".*Amigo Invisible([^>]+)/);
            });
        });

        it('Analytics events sent on pageview', () => {
          cy.visit('/secret-santa/c5d05f6e-03e5-4cea-8996-9e54aa9233e1');

          cy.get('@ga')
            .should('be.calledWith', 'create', 'UA-XXXXX-Y')
            .and('be.calledWith', 'send', {
              hitType: 'pageview',
              page: '/secret-santa/c5d05f6e-03e5-4cea-8996-9e54aa9233e1',
            });
        });

        it('Should show results and the raffle details', () => {
          cy.visit('/secret-santa/c5d05f6e-03e5-4cea-8996-9e54aa9233e1');

          cy.findByText(/Hola david/i).should('exist');
          cy.findByText(/Mario!/i).should('exist');
        });
      });
    });
  });
});
