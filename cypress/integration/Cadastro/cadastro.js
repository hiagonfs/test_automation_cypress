import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Browser from '../../page-object/browser';
import PaginaCadastraUsuario from '../../page-object/cadastro_usuarios/cadastro-usuario-cadastrar';

Given(/^eu acesso a página inicial do sistema$/, () => {
  Browser.visit();
});

Then(/^devo visualizar o título: Cadastro de usuários$/, () => {
  cy.title().should('eq', 'Cadastro de usuários');
});

When(/^inserir o email$/, () => {
  PaginaCadastraUsuario.insereEmail('hiago@teste.com');
});

When(/^inserir o nome$/, () => {
  PaginaCadastraUsuario.insereNome('hiago fernandes');
});

And(/^inserir a senha$/, () => {
  PaginaCadastraUsuario.insereSenha('12345678');
});

And(/^pressiono o botao Cadastrar$/, () => {
  PaginaCadastraUsuario.pressionaBotaoCadastro();
});

Then(/^devo visualizar a mensagem: O campo Nome é obrigatório.$/, () => {
  cy.xpath('//*[@id="root"]/div/div/div[2]/form/div[1]/p')
    .invoke('text')
    .should('eq', 'O campo Nome é obrigatório.');
});

Then(/^devo visualizar a mensagem: O campo E-mail é obrigatório.$/, () => {
  cy.xpath('//*[@id="root"]/div/div/div[2]/form/div[2]/p')
    .invoke('text')
    .should('eq', 'O campo E-mail é obrigatório.');
});

Then(/^devo visualizar a mensagem: O campo Senha é obrigatório.$/, () => {
  cy.xpath('//*[@id="root"]/div/div/div[2]/form/div[3]/p')
    .invoke('text')
    .should('eq', 'O campo Senha é obrigatório.');
});