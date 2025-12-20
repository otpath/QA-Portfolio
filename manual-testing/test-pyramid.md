# Pirâmide de Testes

A pirâmide de testes representa a distribuição ideal dos tipos de testes
em um projeto de software, equilibrando custo, velocidade e confiabilidade.

## Base da Pirâmide
### Testes Unitários
- Rápidos
- Estáveis
- Validam pequenas unidades de código
- Maior volume de testes

## Meio da Pirâmide
### Testes de Integração
- Validam comunicação entre componentes
- Verificam contratos e fluxos entre sistemas

## Topo da Pirâmide
### Testes End-to-End (E2E)
- Validam fluxos completos do usuário
- Mais lentos e frágeis
- Devem ser usados com moderação

## Considerações
Quanto mais alto na pirâmide:
- Maior custo de manutenção
- Menor velocidade de execução
- Maior chance de falhas falsas

A estratégia ideal prioriza testes unitários e de integração,
utilizando E2E apenas para fluxos críticos.
