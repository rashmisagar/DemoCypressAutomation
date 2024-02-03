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
