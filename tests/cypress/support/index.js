// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Import silverback specific helpers.
import './silverback';

Cypress.on('uncaught:exception', (err, runnable) => {
  // Incompatibility between Drupal's tableheader.js and cypress.
  // https://github.com/cypress-io/cypress/issues/2429
  // https://www.drupal.org/project/drupal/issues/2997194
  if (err.message.startsWith("Cannot read property 'displace' of undefined")) {
    return false;
  }
});

