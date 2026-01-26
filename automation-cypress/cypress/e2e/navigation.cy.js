describe('Navegação básica', () => {
  it('Deve navegar até a seção Commands', () => {
    // Acessa a página inicial do site de exemplo do Cypress
    cy.visit('https://example.cypress.io')

    // Clica no link "Commands"
    cy.contains('Commands').click()

    // Verifica se a URL mudou corretamente
    cy.url().should('include', '/commands')

    // Verifica se o título da página Commands está visível
    cy.contains('Commands').should('be.visible')
  })
})
