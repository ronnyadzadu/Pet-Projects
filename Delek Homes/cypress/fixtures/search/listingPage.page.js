class ListingPage{
    get btnFeaturedListings() {return cy.get('[href="/featured-listings"]');}
    get btnSubmit() {return cy.get('.MuiButton-fullWidth');}
    get btnMoreInfo() {return cy.contains('More Info');}
    get inputSearchLogin() {return cy.get('[id=":rc:"]');}
    get inputSearch() {return cy.get('[id=":r1:"]');}
    get inputCityLogin() {return cy.get('[id=":rf:"]');}
    get inputCity() {return cy.get('[id=":r4:"]');}
    get listBoxBedroomsLogin() {return cy.get('[aria-labelledby=":rd:-label :rd:"]');}
    get listBoxBedrooms() {return cy.get('[aria-labelledby=":r2:-label :r2:"]');}
    get optionTenPlusBeedrooms() {return cy.get('[data-value="10"]');}
    get listBoxStates() {return cy.get('[aria-labelledby=":r2d:-label :r2d:"]');}
    get listingHouse() {return cy.get('.MuiPaper-rounded');}
    get toggleDarkMode() {return cy.get('[type="checkbox"]');}
    get priceElement() {return cy.get(".MuiCard-root div:contains($)")}
    get bedroomElement() {return cy.get(".MuiCard-root div:contains(Bedrooms)")}
}
export default new ListingPage


