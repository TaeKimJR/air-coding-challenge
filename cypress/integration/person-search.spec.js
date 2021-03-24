/// <reference types="cypress" />

const FIRST_RESULT_NAME = "Dyanna Cullingford";
const RANDOM_RESULT_NAME = "Claudetta Ellen";

context("Person Search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("renders with an empty search input", () => {
    cy.get('[data-test-id="search-input"]').should("have.value", "");
  });

  it("initially display results", () => {
    cy.get('[data-test-id="person-result"]').contains(FIRST_RESULT_NAME);
  });

  it("allows the user to enter a search term and see results", () => {
    cy.get('[data-test-id="search-input"]').type(RANDOM_RESULT_NAME);

    cy.get('[data-test-id="person-result"]').should("have.length", 1);
    cy.get('[data-test-id="person-result"]').contains(RANDOM_RESULT_NAME);
  });

  it("allows the user to clear the search term", () => {
    cy.get('[data-test-id="search-input"]').type(RANDOM_RESULT_NAME);

    cy.get('[data-test-id="search-input-clear"]').click();

    cy.get('[data-test-id="person-result"]').contains(FIRST_RESULT_NAME);
  });
});
