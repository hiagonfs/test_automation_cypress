const BOTAO_CADASTRO = '//*[@id="register"]';
const CAMPO_NOME = '//*[@id="name"]';
const CAMPO_EMAIL = '//*[@id="email"]';
const CAMPO_SENHA = '//*[@id="password"]';

class PaginaCadastraUsuario {

  static pressionaBotaoCadastro() {
    cy.get(BOTAO_CADASTRO).first().click();
  }

  static insereNome() {
    cy.get(CAMPO_NOME)
      .should('be.visible')
      .type(Cypress.env('NAME'));
  }

  static insereEmail() {
    cy.get(CAMPO_EMAIL)
      .should('be.visible')
      .type(Cypress.env('EMAIL'));
  }

  static insereSenha() {
    cy.get(CAMPO_SENHA)
      .should('be.visible')
      .type(Cypress.env('PASSWORD'));
  }

}

export default PaginaCadastraUsuario;