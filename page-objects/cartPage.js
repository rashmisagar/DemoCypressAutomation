// page-objects/cartPage.js
class CartPage {
    checkout() {
        cy.get('.checkout_button').click();
    }
}

export default new CartPage();
