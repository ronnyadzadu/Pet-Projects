import'cypress-file-upload'

Cypress.Commands.add("login", (email, password) => {
  cy.fixture("userData.json").then((userData) => {
    cy.request("POST", "/api/users/login", {
      email: userData.admin.email,
      password: userData.admin.password,
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
      return response.body.accessToken;
    });
  });
});

Cypress.Commands.add("errorHandler", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

let listingId;

Cypress.Commands.add("createAPIListing", (listingData) => {
  cy.fixture("listingData.json").then((listingData) => {
  cy.fixture('house.jpeg', 'binary').then((image) => {
    const blob = Cypress.Blob.binaryStringToBlob(image, 'image/jpeg');
    const formData = new FormData();
    formData.append("title", listingData.title);
    formData.append("description", listingData.description);
    formData.append("address", listingData.address);
    formData.append("city", listingData.city);
    formData.append("state", listingData.state);
    formData.append("zipCode", listingData.zipCode);
    formData.append("price", listingData.price);
    formData.append("bedrooms", listingData.bedrooms);
    formData.append("bathrooms", listingData.bathrooms);
    formData.append("garage", listingData.garage);
    formData.append("sqft", listingData.sqft);
    formData.append("lotSize", listingData.lotSize);
    formData.append("images", blob, 'house.jpg');
    formData.append("isPublished", true);
    
    cy.request({
      method: "POST",
      url: "/api/estate-objects",
      Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
      body: formData,
    }).then((response) => {
      listingId = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(response.body))).id

      })
    });
  });
});

Cypress.Commands.add("RemoveAPIListing", () => {
      cy.request('DELETE', '/api/estate-objects/'+listingId).then(deleteResponse => {
        console.log(deleteResponse);
      })
    });
