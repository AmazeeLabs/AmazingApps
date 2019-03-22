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

/**
 * Execute a sequence of commands and take a named snapshot afterwards.
 *
 * Next time time the snapshot is loaded and the commands are skipped.
 *
 * Snapshot is automatically invalidated if the install configuration changes.
 */
Cypress.Commands.add('prepareSnapshot', (name, setup) => {
  cy.exec(`cd .. && ./vendor/bin/silverback restore ${name}`,{failOnNonZeroExit: false} ).then((result) => {
    if (result.code !== 0) {
      setup();
      cy.exec(`cd .. && ./vendor/bin/silverback snapshot ${name}`);
    }
  });
});

/**
 * Hide the admin toolbar for the current page visit.
 *
 * Sometimes elements are inaccessible to cypress because they are hidden behind the toolbar.
 */
Cypress.Commands.add('hideAdminToolbar', () => {
  cy.get('body > .toolbar').then( toolbar => toolbar.hide());
});

/**
 * Make sure the admin toolbar is visible again.
 */
Cypress.Commands.add('showAdminToolbar', () => {
  cy.get('body > .toolbar').then( toolbar => toolbar.show());
});

/**
 * Retrieve an input element by searching for it's label.
 */
Cypress.Commands.add('inputByLabel', (label) => {
  return cy.get('label').contains(label).then((result) => {
    return cy.get('#' + result.attr('for'));
  });
});

/**
 * Retrieve an input element by it's value.
 */
Cypress.Commands.add('inputByValue', (value) => {
  return cy.get(`input[value="${value}"]`);
});

/**
 * Execute a drush command.
 */
Cypress.Commands.add('drush', command => {
  return cy.exec(`cd .. && drush ${command}`);
});
