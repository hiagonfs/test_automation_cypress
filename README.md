# Automação de testes com Cypress

Este repositório contêm casos de testes automatizados com Cypress e Cucumber. 
Especialmente neste desafio são realizados testes end-to-end, pois são excelentes no quesito em que refletem as ações dos usuários real. 

### O que é o Cypress?

O Cypress.io é um framework de testes automatizados end-to-end que usa JavaScript. Usa o Selenium para poder fazer a comunicação com os elementos do DOM enviando comandos de forma remota, sem necessidade de importar libs externas do Selenium WebDriver. O que é um ponto extremamente positivo, visto que escrever testes E2E requer muitas ferramentas diferentes pra trabalhar em conjunto.

### O que é o Cucumber?

É uma ferramenta de software que oferece suporte ao desenvolvimento orientado por comportamento (BDD). O framework permite que os comportamentos esperados do software sejam especificados em uma linguagem lógica que os clientes possam entender, mantendo dessa forma uma documentação viva e dinâmica. 

### Sobre os testes

Os testes  implementados neste repositório validam o cadastro de usuários de uma página. 

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Cypress](https://www.cypress.io/)
- [Cucumber](https://cucumber.io/)
- [Node.js](https://nodejs.org/en/)

### Como realizar o setup?

Parar executar siga a sequência de passos abaixo:
```
npm install --save-dev cypress cypress-cucumber-preprocessor
npx cypress install --force
npm install -D cypress-xpath
```
Adicione a seguinte linha em cypress/support/index.js: 
```require('cypress-xpath')```

Adicione as seguintes linhas em cypress/plugins/index.js: 
```
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

Adicione as seguintes linhas em package.json:
```
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```
Adicione as seguintes linhas em cypress.json:
```
{
  "testFiles": "**/*.{feature,features}"
}
```

### Como executar?

```
npx cypress run
or
./node_modules/.bin/cypress run
```

### Relatório

O relatório gerado está na pasta mochawesome-report, na raiz do projeto.
Especificamente o arquivo ```mochawesome-report\mochawesome.html```