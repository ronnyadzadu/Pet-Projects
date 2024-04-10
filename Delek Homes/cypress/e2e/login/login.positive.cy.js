import LoginPage from '../../fixtures/login/login.page'
import userData from '../../fixtures/userData.json'

describe("Login Positive", () => {
  beforeEach(() => {
    cy.visit('/auth/login');
  });

   it("should login with username and password credentials", () => {
      LoginPage.login(
      userData.admin.email,
      userData.admin.password
    );
    LoginPage.btnUserIcon.click();
    LoginPage.menuSettings.click();
    LoginPage.profileFirstName.should('have.value', userData.admin.firstName)
    LoginPage.profileSurName.should('have.value', userData.admin.lastName)
   });

   it("should logout", () => {
    cy.login();
    cy.visit("/");
    LoginPage.logout()
    cy.url().should("include", "/auth/login");
 });
});