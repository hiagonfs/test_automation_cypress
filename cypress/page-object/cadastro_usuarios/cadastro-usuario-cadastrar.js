const BOTAO_CADASTRO = '//*[@id="register"]';
const CAMPO_NOME = '//*[@id="name"]';
const CAMPO_EMAIL = '//*[@id="email"]';
const CAMPO_SENHA = '//*[@id="password"]';

class PaginaCadastraUsuario {

  static pressionaBotaoCadastro() {
    cy.xpath(BOTAO_CADASTRO).first().click();
  }

  static insereNome(value) {
    cy.xpath(CAMPO_NOME).type(value);
  }

  static insereEmail(value) {
    cy.xpath(CAMPO_EMAIL).type(value);
  }

  static insereSenha(value) {
    cy.xpath(CAMPO_SENHA).type(value);
  }

}

export default PaginaCadastraUsuario;