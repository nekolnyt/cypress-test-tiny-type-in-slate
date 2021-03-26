
This repository served to provide example of this issue https://github.com/cypress-io/cypress/issues/7088. The issue was already resolved.

---

# cypress-test-tiny - reproduce cy.type issue in Slate.js

`cy.type` command does not fire `beforeInput` event.

The documentation https://docs.cypress.io/api/commands/type.html#Events says:
> `beforeinput` is not fired even though it is in the spec because no browser has adopted it.

This statement is not true anymore and not firing the event makes it impossible to use Cypress for testing editor implemented with Slate.js.

Test to reproduce the issue: cypress/integration/spec.js
