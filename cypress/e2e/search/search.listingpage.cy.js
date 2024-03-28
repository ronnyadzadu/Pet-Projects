import ListingPage from "../../fixtures/search/listingPage.page";
import ListingData from "../../fixtures/listingData.json"

describe("Search Listings Page", () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.visit("/featured-listings");
    cy.createAPIListing()
    ListingPage.toggleDarkMode.click();
  });

  afterEach(() => {
    cy.RemoveAPIListing()
  });

  it("should search by keyword", () => {
    ListingPage.inputSearch.type(ListingData.title);
    ListingPage.btnSubmit.click();
    cy.contains(ListingData.city);
    cy.contains(ListingData.title);
  });

  it("should search by bedroom", () => {
    ListingPage.listBoxBedrooms.click();
    ListingPage.optionTenPlusBeedrooms.click();
    ListingPage.btnSubmit.click();
    ListingPage.bedroomElement.each((bedroomElement) => {
      const bedroom = bedroomElement.text().replace(/\D/g, "")
      expect(parseInt(bedroom)).to.be.gte(ListingData.bedrooms);
    })
  });

  it("should search by city", () => {
    ListingPage.inputCity.type(ListingData.city);
    ListingPage.btnSubmit.click();
    ListingPage.listingHouse.each((listing) => {
    expect (listing).to.contain(ListingData.city)
    })
  });

  it("should search by price", () => {
    cy.visit(
      "/featured-listings?price=500000-56900000"
    );
    ListingPage.priceElement.each((priceElement) => {
      const price = priceElement.text().replace(/\D/g, "");

      expect(parseInt(price)).to.be.above(499999);
      expect(parseInt(price)).to.be.below(56900000);
    });
  });
});
