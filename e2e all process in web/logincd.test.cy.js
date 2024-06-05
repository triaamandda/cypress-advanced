// <reference types="cypress" />

describe('Login/ Logout Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.url().should('include', 'v1/index.html')
    });
    
    it('Should try to login with invalid data', () => {
        cy.fixture("user").then(user => {
            const InvalidUsername = user.InvalidUsername
            const InvalidPassword = user.InvalidPassword

            cy.get('#user-name').should('be.visible')
            cy.get('#user-name').type(user.InvalidUsername)
            cy.get('#password').type(user.InvalidPassword)
            cy.get('.btn_action').click()

            cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    });
});

    it('Should login to application with valid data', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type('standard_user')
            cy.get('#password').clear()
            cy.get('#password').type('secret_sauce')
            cy.get('.btn_action').click()

            cy.get('.product_label').should('contain.text', 'Products') 

            cy.contains('Open Menu').click()
            cy.get('#logout_sidebar_link').click()
            cy.visit('https://www.saucedemo.com/v1/index.html')
            cy.url().should('include', 'v1/index.html')
            cy.get('.login_logo').should('contain.text', '')
  });
});
});