class RegistrationPage{
    get btnSubmit() {return cy.get('[type="submit"]')}
    get inputFirstName() {return cy.get('[name="firstName"]')}
    get inputLastName() {return cy.get('[name="lastName"]')}
    get inputEmail() {return cy.get('[name="email"]')}
    get inputPassword() {return cy.get('[name="password"]')}
    get checkBoxIsRealtor() {return cy.get('[name="isRealtor"]')}
    get profileFirstName() {return cy.get('[name="username"]');}
    get profileSurName() {return cy.get('[name="user_surname"]');}
    get btnUserIcon() {return cy.get('[class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-vanhy0"]');}
    get menuSettings() {return cy.get('[href="/dashboard/user/account"]');}
    get profileFirstName() {return cy.get('[name="username"]');}
    get profileSurName() {return cy.get('[name="user_surname"]');}

    registerAccount(firstName, lastName, email, password){
        if(firstName) {this.inputFirstName.type(firstName)}
        if(lastName) {this.inputLastName.type(lastName)}
        if(email) {this.inputEmail.type(email)}
        if(password) {this.inputPassword.type(password)}
        this.btnSubmit.click()
        }

        registerExistingAccount(){
            cy.fixture('userData.json').then((userData) => {
                this.inputFirstName.type(userData.admin.firstName)
                this.inputLastName.type(userData.admin.lastName)
                this.inputEmail.type(userData.admin.email)
                this.inputPassword.type(userData.admin.password)
                this.btnSubmit.click()
            })
        }
}
export default new RegistrationPage()