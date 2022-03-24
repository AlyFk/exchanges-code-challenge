describe('test exchange list', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should show the elements on the pages and navigate', () => {
    cy.get('[data-testid^=exchanges_link]').first().as('firstItem');
    cy.get('@firstItem').invoke('attr', 'data-testid').as('firstItemId');
    cy.get('[data-testid="card-title"]')
      .first()
      .invoke('text')
      .as('firstItemTitle');
    cy.get('@firstItem').click();
    cy.get<string>('@firstItemId').then((text) => {
      cy.location('pathname').should('contain', text.split('-')[1]);
    });
    cy.get('[data-testid=exchange-title]')
      .invoke('text')
      .then((item) => {
        cy.get('@firstItemTitle').should('eq', item);
      });
    cy.get('[data-testid=back-button]').click().url().should('eq', `${Cypress.config().baseUrl}/`);
  });
});
