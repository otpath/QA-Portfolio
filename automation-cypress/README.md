# Automation Cypress

Projeto de automação E2E utilizando Cypress, com foco em validações básicas de interface e navegação.

## Objetivo
Demonstrar conhecimento prático na estruturação de testes automatizados E2E, cobrindo:
- organização de projeto
- configuração do Cypress
- escrita de testes legíveis e objetivos
- execução e análise de resultados

## Tecnologias
- Cypress
- JavaScript
- Node.js

## Estrutura
- `cypress/e2e/login.cy.js`: teste E2E simples validando o acesso à página inicial do site de exemplo do Cypress e a renderização do conteúdo principal.
- `cypress.config.js`: configuração do Cypress para execução de testes E2E.
- `package.json`: dependências e scripts do projeto.

## Teste implementado
O teste existente valida:
- acesso à URL https://example.cypress.io
- verificação da visibilidade do título principal (“Kitchen Sink”)

O objetivo do teste é demonstrar domínio da sintaxe básica do Cypress (`describe`, `it`, `cy.visit`, `cy.contains`, `should`).

## Execução
```bash
npm install
npx cypress open
