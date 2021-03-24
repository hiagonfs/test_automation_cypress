const REGISTER_BUTTON = '//*[@id="register"]';
const DELETE_BUTTON = '//*[@id="removeUser1"]';
const NAME_FIELD = '//*[@id="name"]';
const EMAIL_FIELD = '//*[@id="email"]';
const PASSWORD_FIELD = '//*[@id="password"]';
const MESSAGE_NAME_FIELD = '//*[@id="root"]/div/div/div[2]/form/div[1]/p';
const MESSAGE_EMAIL_FIELD = '//*[@id="root"]/div/div/div[2]/form/div[2]/p';
const MESSAGE_PASSWORD_FIELD = '//*[@id="root"]/div/div/div[2]/form/div[3]/p';
const TABLE = '//*[@id="root"]/div/div/div[2]/table';

class RegisterUserPage {

  static pressionRegisterButton() {
    cy.xpath(REGISTER_BUTTON).first().click();
  }

  static nameFieldIsVisible() {
    return cy.xpath('//*[@id="root"]/div/div/div[2]/form/div[1]/label')
      .invoke('text')
      .contains('Nome');
  }

  static emailFieldIsVisible() {
    return cy.xpath('//*[@id="root"]/div/div/div[2]/form/div[2]/label')
      .invoke('text')
      .contains('E-mail');
  }

  static passwordFieldIsVisible() {
    return cy.xpath('//*[@id="root"]/div/div/div[2]/form/div[3]/label')
      .invoke('text')
      .contains('Senha');
  }

  static insertName(value) {
    cy.xpath(NAME_FIELD).type(value);
  }

  static insertEmail(value) {
    cy.xpath(EMAIL_FIELD).type(value);
  }

  static insertPassword(value) {
    cy.xpath(PASSWORD_FIELD).type(value);
  }

  static getMessageName() {
    return cy.xpath(MESSAGE_NAME_FIELD).invoke('text');
  }

  static getMessageEmail() {
    return cy.xpath(MESSAGE_EMAIL_FIELD).invoke('text');
  }

  static getMessagePassword() {
    return cy.xpath(MESSAGE_PASSWORD_FIELD).invoke('text');
  }

  static isTableVisible() {
    return cy.xpath(TABLE).should('be.visible');
  }

  static isTableNotVisible() {
    return cy.xpath(TABLE).should('not.exist');
  }

  static getContentTable() {
    return cy.xpath(TABLE);
  }

  static pressionDeleteButton() {
    cy.xpath(DELETE_BUTTON).click();
  }

}

export default RegisterUserPage;