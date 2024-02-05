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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login');
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
});

Cypress.Commands.add('addProductToCart', (productName) => {
    // Implement logic to add product to cart
});

Cypress.Commands.add('proceedToCheckout', () => {
    // Implement logic to proceed to checkout
});

Cypress.Commands.add('enterPaymentDetails', (paymentDetails) => {
    // Implement logic to enter payment details
});

Cypress.Commands.add('enterShippingInformation', (shippingInfo) => {
    // Implement logic to enter shipping information
});

Cypress.Commands.add('confirmOrder', () => {
    // Implement logic to confirm the order
});
