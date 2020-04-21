/// <reference types="cypress" />

// There is uncaught exception on the editor side, when using cy.type
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('page', () => {
  it('works in Firefox, fails in Chrome', () => {
    cy.visit('https://www.slatejs.org/examples/richtext')

    const testString = 'Hello world';

    cy.get('[data-slate-editor="true"]')
      .clear()
      .type(testString);

    // Passes in Firefox (does not rely on beforeInput event)
    // Fails in Chrome, the text gets written on wrong element: data-slate-node
    cy.contains('[data-slate-string="true"]', testString)
    .should('be.visible');
  })
})
