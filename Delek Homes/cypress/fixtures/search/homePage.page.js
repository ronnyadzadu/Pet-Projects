class HomePage{
    get inputSearchLogin() {return cy.get('[id=":r8:"]');}
    get inputSearch() {return cy.get('[id=":r1:"]');}
    get inputCityLogin() {return cy.get('[id=":rb:"]');}
    get inputCity() {return cy.get('[id=":r4:"]');}
    get dropDownBedroomLogin() {return cy.get('[aria-labelledby=":r9:-label :r9:"]');}
    get dropDownBedroom() {return cy.get('[aria-labelledby=":r2:-label :r2:"]');}
    get optionTenPlusBeedrooms() {return cy.get('[data-value="10"]');}
    get btnSubmit() {return cy.get('.MuiButton-fullWidth');}
    get btnMoreInfo() {return cy.contains('More Info');}
    get informyhouselisting() {return cy.get('[href="/featured-listings/1700"]');}
    get toggleDarkMode() {return cy.get('[type="checkbox"]');}
    get listingHouse() {return cy.get('.MuiPaper-rounded');}
    get priceElement() {return cy.get(".MuiCard-root div:contains($)")}
    get bedroomElement() {return cy.get(".MuiCard-root div:contains(Bedrooms)")}
}export default new HomePage





