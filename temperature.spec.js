/// <reference types="cypress" />

describe("temperature conversion app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has a home page", () => {
    cy.contains("Choose what you want to convert!").should("exist");
  });

  it("converts from celsius to fahrenheit", () => {
    cy.contains("celsius-to-fahrenheit").click();
    // TODO: use `cy.contains()` to select the link to the c2f page
    // and use `.click()` to go to the page
    cy.get('[data-test="input"]').type("100");
    // TODO: use `cy.get()` to select the input element and
    // use `.type("100")` to put a value into it
    cy.get("form").submit();
    // TODO: use `cy.get()` to select the form and `.submit()` it
    cy.contains("100°C equal").should("exist");
    // TODO: select the output div.
    // it().should("include.text", "100 °C equal");
    // It `.should("include.text", "100 °C equal")`.
  });

  // TODO: create a second test for the other conversion page
});
