import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Browser from '../../page-object/browser';
import RegisterUserPage from '../../page-object/register_user/registerUser';

const VALID_NAME = 'Hiago Fernandes';
const INVALID_NAME = 'Hiago';
const VALID_EMAIL = 'hiago@teste.com';
const INVALID_EMAIL = 'hiago.teste.com';
const VALID_PASSWORD = '1234abcd';
const INVALID_PASSWORD = '12ab';

Given(/^eu acesso a página inicial do sistema$/, () => {
  Browser.visit();
});

When(/^inserir o email$/, () => {
  RegisterUserPage.insertEmail(VALID_EMAIL);
});

When(/^inserir o nome$/, () => {
  RegisterUserPage.insertName(VALID_NAME);
});

When(/^inserir o nome incompleto$/, () => {
  RegisterUserPage.insertName(INVALID_NAME);
});

And(/^inserir a senha$/, () => {
  RegisterUserPage.insertPassword(VALID_PASSWORD);
});

And(/^visualizar as informações do usuário cadastrado$/, () => {
  RegisterUserPage.isTableVisible();
  RegisterUserPage.getContentTable()
    .should('have.length', 1);
});

And(/^clicar no botão excluir$/, () => {
  RegisterUserPage.pressionDeleteButton();
});

And(/^inserir o email invalido$/, () => {
  RegisterUserPage.insertEmail(INVALID_EMAIL);
});

And(/^inserir a senha incompleta$/, () => {
  RegisterUserPage.insertPassword(INVALID_PASSWORD);
});

And(/^pressiono o botao Cadastrar$/, () => {
  RegisterUserPage.pressionRegisterButton();
});

Then(/^devo visualizar o título: Cadastro de usuários$/, () => {
  cy.title().should('eq', 'Cadastro de usuários');
});

Then(/^devo visualizar as informações do usuário cadastrado$/, () => {
  RegisterUserPage.isTableVisible();
});

Then(/^o usuario deve ser apagado da tabela$/, () => {
  RegisterUserPage.isTableNotVisible();
});

Then(/^devo visualizar a mensagem: O campo Nome é obrigatório.$/, () => {
  RegisterUserPage.getMessageName()
    .should('eq', 'O campo Nome é obrigatório.');
});

Then(/^devo visualizar a mensagem: O campo E-mail é obrigatório.$/, () => {
  RegisterUserPage.getMessageEmail()
    .should('eq', 'O campo E-mail é obrigatório.');
});

Then(/^devo visualizar a mensagem: O campo Senha é obrigatório.$/, () => {
  RegisterUserPage.getMessagePassword()
    .should('eq', 'O campo Senha é obrigatório.');
});

Then(/^devo visualizar a mensagem: Por favor, insira um nome completo.$/, () => {
  RegisterUserPage.getMessageName()
    .should('eq', 'Por favor, insira um nome completo.');
});

Then(/^devo visualizar a mensagem: Por favor, insira um e-mail válido.$/, () => {
  RegisterUserPage.getMessageEmail()
    .should('eq', 'Por favor, insira um e-mail válido.');
});

Then(/^devo visualizar a mensagem: A senha deve conter ao menos 8 caracteres.$/, () => {
  RegisterUserPage.getMessagePassword()
    .should('eq', 'A senha deve conter ao menos 8 caracteres.');
});