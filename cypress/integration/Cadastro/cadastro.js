import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Browser from '../../page-object/browser';
import PaginaCadastraUsuario from '../../page-object/cadastro_usuarios/cadastro-usuario-cadastrar';

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
  PaginaCadastraUsuario.insertEmail(VALID_EMAIL);
});

When(/^inserir o nome$/, () => {
  PaginaCadastraUsuario.insertName(VALID_NAME);
});

When(/^inserir o nome incompleto$/, () => {
  PaginaCadastraUsuario.insertName(INVALID_NAME);
});

And(/^inserir a senha$/, () => {
  PaginaCadastraUsuario.insertPassword(VALID_PASSWORD);
});

And(/^visualizar as informações do usuário cadastrado$/, () => {
  PaginaCadastraUsuario.isTableVisible();
  PaginaCadastraUsuario.getContentTable()
    .should('have.length', 1);
});

And(/^clicar no botão excluir$/, () => {
  PaginaCadastraUsuario.pressionDeleteButton();
});

And(/^inserir o email invalido$/, () => {
  PaginaCadastraUsuario.insertEmail(INVALID_EMAIL);
});

And(/^inserir a senha incompleta$/, () => {
  PaginaCadastraUsuario.insertPassword(INVALID_PASSWORD);
});

And(/^pressiono o botao Cadastrar$/, () => {
  PaginaCadastraUsuario.pressionRegisterButton();
});

Then(/^devo visualizar o título: Cadastro de usuários$/, () => {
  cy.title().should('eq', 'Cadastro de usuários');
});

Then(/^devo visualizar as informações do usuário cadastrado$/, () => {
  PaginaCadastraUsuario.isTableVisible();
});

Then(/^o usuario deve ser apagado da tabela$/, () => {
  PaginaCadastraUsuario.isTableNotVisible();
});

Then(/^devo visualizar a mensagem: O campo Nome é obrigatório.$/, () => {
  PaginaCadastraUsuario.getMessageName()
    .should('eq', 'O campo Nome é obrigatório.');
});

Then(/^devo visualizar a mensagem: O campo E-mail é obrigatório.$/, () => {
  PaginaCadastraUsuario.getMessageEmail()
    .should('eq', 'O campo E-mail é obrigatório.');
});

Then(/^devo visualizar a mensagem: O campo Senha é obrigatório.$/, () => {
  PaginaCadastraUsuario.getMessagePassword()
    .should('eq', 'O campo Senha é obrigatório.');
});

Then(/^devo visualizar a mensagem: Por favor, insira um nome completo.$/, () => {
  PaginaCadastraUsuario.getMessageName()
    .should('eq', 'Por favor, insira um nome completo.');
});

Then(/^devo visualizar a mensagem: Por favor, insira um e-mail válido.$/, () => {
  PaginaCadastraUsuario.getMessageEmail()
    .should('eq', 'Por favor, insira um e-mail válido.');
});

Then(/^devo visualizar a mensagem: A senha deve conter ao menos 8 caracteres.$/, () => {
  PaginaCadastraUsuario.getMessagePassword()
    .should('eq', 'A senha deve conter ao menos 8 caracteres.');
});