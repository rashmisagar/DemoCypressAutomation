import LoginPage from '../../page-objects/loginPage';
import InventoryPage from '../../page-objects/inventoryPage';
import CartPage from '../../page-objects/cartPage';
import CheckoutPage from '../../page-objects/checkoutPage';

Given('the user is on the login page', () => {
    LoginPage.visit();
});

When('the user logs in with valid credentials', () => {
    const { username, password } = Cypress.env('loginCredentials');
    LoginPage.login(username, password);
});

Then('the user adds items to the cart', () => {
    InventoryPage.addToCart('Sauce Labs Backpack');
    InventoryPage.addToCart('Sauce Labs Bolt T-Shirt');
});

And('the user completes the checkout process', () => {
    CartPage.checkout();
    const { firstName, lastName, zipCode } = Cypress.env('shippingInfo');
    CheckoutPage.completeCheckout(firstName, lastName, zipCode);
});

And('the purchase is successful', () => {
    // Add assertion for successful purchase
});
