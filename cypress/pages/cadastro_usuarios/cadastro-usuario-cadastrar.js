const BOTAO_CADASTRO = '//*[@id="register"]';

class PaginaCadastraUsuario {

  static pressionaBotaoCadastro() {
    cy.get(BOTAO_CADASTRO).first().click();
  }

}

export default PaginaCadastraUsuario;