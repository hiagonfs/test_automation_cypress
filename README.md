# Automação de testes com Cypress

Este repositório contêm exemplos de casos de testes de automação com Cypress, utilizando o framework Cucumber. 
Especialmente neste desafio são realizados testes end-to-end, pois são excelentes no quesito em que refletem as ações dos usuários real. 

### Sobre os testes

Os testes  implementados neste repositório validam o cadastro de usuários de uma página. 

### Como realizar o setup?

Parar executar siga a sequência de passos abaixo:
```
npm install --save-dev cypress cypress-cucumber-preprocessor
npx cypress install --force
npm install -D cypress-xpath
```
Adicione a seguinte linha em cypress/support/index.js: ```require('cypress-xpath')```

Adicione as seguintes linhas em cypress/plugins/index.js: ```require('cypress-xpath')```

### Como executar?

```
npx cypress run
or
./node_modules/.bin/cypress run
```
