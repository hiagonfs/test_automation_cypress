import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Browser from '../../page-object/browser'

Given(/^eu acesso a página inicial do sistema$/, () => {
  Browser.visit();
});

Then(/^devo visualizar o título: Cadastro de usuários$/, () => {
  cy.title().should('eq', 'Cadastro de usuários');
});

When(/^o formulário estiver visível$/, () => {
  cy.get('//*[@id="root"]/div/div/div[2]/form')
    .should('be.visible');
});

Then(/^os campos devem estar vazios$/, () => {
  return true;
});



