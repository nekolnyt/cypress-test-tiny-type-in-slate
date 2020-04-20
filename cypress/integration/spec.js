/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://www.slatejs.org/examples/richtext')

    const testString = 'Hello world';

    cy.get('[data-slate-editor="true"]').type(`${testString}{enter}`);

    cy.contains('[data-slate-string="true"]', testString).should('be.visible');
  })
})
