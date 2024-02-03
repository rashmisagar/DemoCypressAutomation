// step-definitions/shoppingSteps.js
import InventoryPage from '../../page-objects/inventoryPage';
import CartPage from '../../page-objects/cartPage';

Given('the user is logged in', () => {
    // Assume user is already logged in
});

When('the user adds items to the cart', () => {
    InventoryPage.addToCart('Sauce Labs Backpack');
    InventoryPage.addToCart('Sauce Labs Bolt T-Shirt');
});

Then('the items should be in the cart', () => {
    // Add assertion for items in the cart
});
