
# Cypress E2E Tests

  

Este diretório contém testes end-to-end desenvolvidos com Cypress, com foco em validação de fluxos de navegação e comportamento básico de interface.

  

Os testes utilizam o site público https://example.cypress.io apenas como ambiente de demonstração técnica.

  

---

  

## Tecnologias

  

- Cypress (E2E)

- JavaScript

- Node.js

  

---

  

## Estrutura

  

```text

automation-cypress/

├─ cypress/

│ └─ e2e/

│ ├─ login.cy.js

│ └─ navigation.cy.js

├─ cypress.config.js

├─ package.json

└─ README.md

```

---

  

## Como executar os testes

  

Instalar dependências:

    bash
    
        npm install

  

---

  

Abrir o Cypress em modo interativo:

    bash
    
        npx cypress open

  

---

  

Executar os testes em modo headless:

    bash
    
        npx cypress run
