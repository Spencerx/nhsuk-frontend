// TODO: need to add aria expander status and aria label

describe('Expander - group components tests', function () {

  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Navigating to EXpander - group Component', function () {
    cy.visit(Cypress.config().baseUrl + '/expander-group.html')
  });

  it('Checking for nhsuk-expander-group - class', function () {
    cy.get('.nhsuk-expander-group')
  });

  it('Checking for nhsuk-details nhsuk-expander - class', function () {
    cy.get('.nhsuk-expander-group').first().children().should('have.class', 'nhsuk-details nhsuk-expander')
  });

  it('Checking for nhsuk-details__summary - class', function () {
    cy.get('.nhsuk-expander-group').first().children().first().children().should('have.class', 'nhsuk-details__summary')
  });

  it('Checking for nhsuk-details__summary-text - class', function () {
    cy.get('.nhsuk-expander-group').first().children().first().children().first().children().should('have.class', 'nhsuk-details__summary-text')
  });

});
