describe("Search Listings", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  afterEach(() => {
    cy.RemoveAPIListing()
  });

 it("create new listing through API", () => {
  cy.createAPIListing()
 });
});