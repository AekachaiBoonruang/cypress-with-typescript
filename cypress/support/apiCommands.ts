/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    loginApi(
      email: string,
      password: string,
      statusCode: number,
      key: string,
      message: string
    ): Chainable<Element>;
  }
}

Cypress.Commands.add(
  "loginApi",
  (email, password, statusCode, key, message) => {
    cy.request({
      method: "POST",
      url: "api.mocki.io/v1/877a8df5",
      body: {
        email: email,
        password: password,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(statusCode);
      expect(response.body).to.have.property(key, message);
    });
  }
);
