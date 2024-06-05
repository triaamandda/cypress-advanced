// <reference types="cypress" />

describe('Login/ Logout Test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });
    
    it('Should try to login with invalid data', () => {
        cy.fixture("user").then(user => {
            const InvalidUsername = user.InvalidUsername
            const InvalidPassword = user.InvalidPassword

            cy.get('#login_form').should('be.visible')
            cy.get('#user_login').type(user.InvalidUsername)
            cy.get('#user_password').type(user.InvalidPassword)
            cy.get('input[name="submit"]').click()
    });
});

    it('Should display error message', () => {
        cy.visit('http://zero.webappsecurity.com/login.html?login_error=true')
        cy.url().should('include', 'login.html?login_error=true')
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });

    it('Should login to application with valid data', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.login(username,password)
            
            cy.contains('username').click()
            cy.get('#logout_link').click()
            cy.visit('http://zero.webappsecurity.com/online-banking.html')
            cy.url().should('include', 'online-banking.html')
            cy.get('strong').should('contain.text', 'Online Banking')
  });
});
});