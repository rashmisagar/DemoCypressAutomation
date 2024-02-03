// page-objects/checkoutPage.js
class CheckoutPage {
    completeCheckout(firstName, lastName, zipCode) {
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(zipCode);
        cy.get('.cart_button').click();
    }
}

export default new CheckoutPage();
