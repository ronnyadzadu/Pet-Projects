import HomePagePage from "../../fixtures/search/homePage.page";
import ListingData from "../../fixtures/listingData.json"

describe("Search Homepage", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
    cy.createAPIListing()
    HomePagePage.toggleDarkMode.click();
  });

  afterEach(() => {
    cy.RemoveAPIListing()
  });

  it("should search by keyword", () => {
    HomePagePage.inputSearch.type(ListingData.title);
    HomePagePage.btnSubmit.click();
    cy.contains(ListingData.city);
    cy.contains(ListingData.title);
  });

  it("should search by bedroom", () => {
    HomePagePage.dropDownBedroom.click();
    HomePagePage.optionTenPlusBeedrooms.click();
    HomePagePage.btnSubmit.click();
    HomePagePage.bedroomElement.each((bedroomElement) => {
      const bedroom = bedroomElement.text().replace(/\D/g, "");
      expect(parseInt(bedroom)).to.be.gte(ListingData.bedrooms);
    })
   });

  it("should search by city", () => {
    HomePagePage.inputCity.type(ListingData.city);
    HomePagePage.btnSubmit.click();
    HomePagePage.listingHouse.each((listing) => {
      expect(listing).to.contain(ListingData.city)
    })
  });

  it("should search by price", () => {
    cy.visit(
      "/featured-listings?price=500000-56900000"
    );
    HomePagePage.priceElement.each((priceElement) => {
      const price = priceElement.text().replace(/\D/g, "");

      expect(parseInt(price)).to.be.above(499999);
      expect(parseInt(price)).to.be.below(56900000);
    });
  });
 });
