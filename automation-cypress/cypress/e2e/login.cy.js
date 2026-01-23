describe('Login - exemplo simples', () => {
  it('Deve acessar a página inicial do Cypress', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').should('be.visible')
  })
})
