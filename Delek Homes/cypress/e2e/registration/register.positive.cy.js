import RegistrationPage from "../../fixtures/registration/registration.page";
import { faker } from "@faker-js/faker";
import errorMessages from "../../fixtures/errorMessages.json"

describe("Register a new Account", () => {
  beforeEach(() => {
    cy.visit("/auth/register");
  });

  const userData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  it("should register a new account", () => {
    RegistrationPage.registerAccount(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );
    RegistrationPage.btnUserIcon.click();
    RegistrationPage.menuSettings.click();
    RegistrationPage.profileFirstName.should("have.value", userData.firstName);
    RegistrationPage.profileSurName.should("have.value", userData.lastName);
  });

  it("should not register with existing account", () => {
    RegistrationPage.registerExistingAccount();
    cy.contains(errorMessages.errorMsgDuplicateUser);
  });

  it("should not register with null email", () => {
    RegistrationPage.registerAccount(
      userData.firstName,
      userData.lastName,
      null,
      userData.password
    );
    cy.contains(errorMessages.errorMsgEmail);
  });
});
