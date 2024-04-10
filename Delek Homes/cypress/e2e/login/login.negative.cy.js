import LoginPage from '../../fixtures/login/login.page'
import ErrorMessages from "../../fixtures/errorMessages.json"
import UserData from "../../fixtures/userData.json"

describe("Login negative", () => {
  beforeEach(() => {
    cy.visit('/auth/login');
  });

  it("should not login with incorrect password", () => {
    LoginPage.login(UserData.admin.email, UserData.InvalidUsers.password)
    cy.contains(ErrorMessages.errorMsgLogin);
  });

  it("should not login with no credentials", () => {
    LoginPage.btnSubmit.click();
    cy.contains(ErrorMessages.errorMsgEmail);
    cy.contains(ErrorMessages.errorMsgPassword);
  });
});
