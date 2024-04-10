import CreateListingPage from "../../fixtures/create listing/create listing.page"
import HomePagePage from "../../fixtures/search/homePage.page"
import { faker } from "@faker-js/faker";

describe("House Listing", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/dashboard/real-estate/new");
  });

const listingData = {
  title: faker.commerce.productName(),
  description: faker.lorem.sentence(),
  city: faker.address.city(),
  address: faker.address.streetAddress(),
  zipCode: faker.datatype.number(10000, 99999),
  price: faker.datatype.number({ min: 500000, max: 10000000 }),
  bedRooms: faker.datatype.number({ min: 1, max: 5 }),
  bathrooms: faker.datatype.number({ min: 1, max: 3 }),
  garage: faker.datatype.number({min: 1, max:3}),
  sqft: faker.datatype.number({ min: 500, max: 5000 }),
  lotSize: faker.datatype.number({ min: 1000, max: 10000 }),
};

it("Create New House Listing", () => {
  CreateListingPage.createANewRealEstate(
    listingData.title,
    listingData.description,
    listingData.city,
    listingData.address,
    listingData.zipCode,
    listingData.state,
    listingData.price,
    listingData.bedRooms,
    listingData.bathrooms,
    listingData.garage,
    listingData.sqft,
    listingData.lotSize,
  );
  cy.url().should("include", "/dashboard/real-estate/list");
});

it("Search by city", () =>{
cy.visit('/');
HomePagePage.inputCity.type(listingData.city);
HomePagePage.btnSubmit.click();
CreateListingPage.btnMoreInfo.click()
cy.contains(listingData.title);
cy.contains(listingData.sqft);
cy.contains(listingData.garage);
})
})
