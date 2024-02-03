// page-objects/inventoryPage.js
class InventoryPage {
    addToCart(itemName) {
        cy.contains(itemName).parent().contains('Add to cart').click();
    }
}

export default new InventoryPage();
