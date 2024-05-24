describe('test een', () =>{
    it('should visit google.com', function () {
        cy.visit("www.google.com")
    })
})

describe('test twee', () =>{
    it('should visit productpage', function () {
        cy.visit("localhost:4200")
        cy.contains('Products').click()
        cy.url().should("eq", "http://localhost:4200/products")
    })
})

describe('test drie', () =>{
    it('should visit loginpage', function () {
        cy.visit("localhost:4200")
        cy.get('#dropdownMenu').click()
        cy.contains('Login').click()
        cy.url().should("eq", "http://localhost:4200/account/login")
    })
})

describe('test vier', () =>{
    it('should visit cartpage', function () {
        cy.visit("localhost:4200")
        cy.contains('Cart').click()
        cy.url().should("eq", "http://localhost:4200/cart")
    })
})