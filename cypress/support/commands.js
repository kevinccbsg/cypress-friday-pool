// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('selectOption', (poolId, { text, option }) => {
  cy.visit(`/poll/${poolId}`);
  cy.clearCookies();
  cy.visit(`/poll/${poolId}`);
  cy.get('#d-newParticipantInput').type(text);
  cy.get(`#d-pollView > article > div > div > div > ul > li:nth-child(${option}) input`).click({ force: true });
  cy.get('.d-actionButtons > .d-button').click();
  cy.clearCookies();
});
