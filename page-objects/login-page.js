// page-objects/loginPage.js
class LoginPage {
    visit() {
        cy.visit('/');
    }

    login(username, password) {
        cy.get('#user-name').type(username);
        cy.get('#password').type(password);
        cy.get('#login-button').click();
    }
}

export default new LoginPage();
