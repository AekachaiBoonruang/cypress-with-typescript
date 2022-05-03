/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    visitGoogle(value: string): Chainable<Element>;
  }
}

Cypress.Commands.add("visitGoogle", (user) => {
  cy.title().should("eq", user);
});
