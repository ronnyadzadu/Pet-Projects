class LoginPage {
  get btnSubmit() {
    return cy.get('[type="submit"]');
  }
  get btnDashboard() {
    return cy.get('[href="/dashboard"]');
  }
  get inputEmail() {
    return cy.get('[name="email"]');
  }
  get inputPassword() {
    return cy.get('[name="password"]');
  }
  get btnUserIcon() {
    return cy.get(".css-vanhy0");
  }
  get menuSettings() {
    return cy.get('[href="/dashboard/user/account"]');
  }
  get menuLogout() {
    return cy.get(".css-p9n58v");
  }
  get profileFirstName() {
    return cy.get('[name="username"]');
  }
  get profileSurName() {
    return cy.get('[name="user_surname"]');
  }

  login(email, password){
    if(email) {this.inputEmail.type(email)}
    if(password) {this.inputPassword.type(password)}
    this.btnSubmit.click()
    }

    loginWithIncorrectPassword(){
      cy.fixture('userData.json').then((userData) => {
          this.inputEmail.type(userData.email)
          this.inputPassword.type(userData.inValidPassword)
          this.btnSubmit.click()
      })
  }

  logout() {
    this.btnDashboard.click();
    this.btnUserIcon.click();
    this.menuLogout.click();
  }
}
export default new LoginPage();

