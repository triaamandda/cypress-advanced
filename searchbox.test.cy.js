// <reference types="cypress" />


describe('Searchbox Text', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online{enter}')
    });

    it('Should show search result page', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('online{enter}')
        cy.get('h2').should('have.text', 'Search Results:')
        cy.get('a[href="/online-banking.html"]').should('have.text', 'Zero - Free Access to Online Banking')
        cy.get('a[href="/bank/online-statements.html"]').should('have.text', 'Zero - Online Statements')
    });
});