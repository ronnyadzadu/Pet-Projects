class CreatelistingPage {
  get btnSetDemoValues() { return cy.get('[class="MuiBox-root css-6su6fj"]');}
  get togglePublish() { return cy.get('[name="isPublished"]');}
  get btnSubmit() { return cy.get('[type="submit"]');}
  get btnMoreInfo() { return cy.contains('More Info');}
  get inputTitle() { return cy.get('[name="title"]');}
  get inputDescription() { return cy.get('[name="description"]');}
  get inputCity() { return cy.get('[name="city"]');}
  get inputAddress() { return cy.get('[name="address"]');}
  get inputZipCode() { return cy.get('[name="zipCode"]');}
  get inputPrice() { return cy.get('[name="price"]');}
  get inputBedrooms() { return cy.get('[name="bedrooms"]');}
  get inputBathrooms() { return cy.get('[name="bathrooms"]');}
  get inputgarage() { return cy.get('[name="garage"]');}
  get inputSqft() { return cy.get('[name="sqft"]');}
  get inputlotSize() { return cy.get('[name="lotSize"]');}
  get currentListingPage() { return cy.get('[class="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2"]');}
  get imageUpload() { return cy.get('[fill="url(#BG)"]');}
  get dropdownState() { return cy.get('[variant="outlined"]');}
  get stateDE() { return cy.get('[data-value="DE"]');}
  get pictureUpload() { return cy.get('[type="file"]');}

  createANewRealEstate(title, description, city, address, zipCode, state, price, bedrooms, bathrooms, garage, sqft, lotSize) {
    if(title) { this.inputTitle.type(title);}
    if(description) { this.inputDescription.type(description);}
    if(city) { this.inputCity.type(city);}
    if(address) { this.inputAddress.type(address);}
    if(zipCode) { this.inputZipCode.type(zipCode);}
    if(price) { this.inputPrice.type(price);}
    if(bedrooms) { this.inputBedrooms.type(bedrooms);}
    if(bathrooms) { this.inputBathrooms.type(bathrooms);}
    if(garage) { this.inputgarage.type(garage);}
    if(sqft) { this.inputSqft.type(sqft);}
    if(lotSize) { this.inputlotSize.type(lotSize);}
    this.dropdownState.click()
    this.stateDE.click()
    this.pictureUpload.selectFile('cypress/fixtures/house.jpeg', {force: true});
    this.togglePublish.click()
    this.btnSubmit.click();
  }
  }
export default new CreatelistingPage();

