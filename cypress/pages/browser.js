class Browser {

  static visit() {
    cy.log(Cypress.config().baseUrl);
    cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
  }
}

export default Browser;
