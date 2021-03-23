import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Browser from '../../pages/browser'

When('eu acesso a página do sistema', () => {
  Browser.visit();
});

Then('devo visualizar o título: Cadastro de usuários', () => {
  cy.title().should('eq', 'Cadastro de usuários');
});