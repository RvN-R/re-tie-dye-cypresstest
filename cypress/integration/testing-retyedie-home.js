/// <reference types="cypress" />

context("Testing Re Tie Dye Home page", () => {
    beforeEach(() => {
        cy.visit("/index.html")
    })

    it("Locating home page logo", ()=>{
        cy.get('.re-tie-dye-logo').should("exist")
    })

    it("Locating main h3 on Home Page", () => {
        cy.get("h3").contains("So, how does this work?")
    })

    it("Locating the 4th li in the ul on the home page", () => {
        cy.get("ul").find('li').eq(3)
    })

    it("Locate Get Bidding call to action button", () => {
        cy.get("[role='button']").should("exist")
    })

    it("Locate Get Bidding call to action button make sure it takes you to the correct page once clicked", () => {
        cy.contains("Get Bidding!").click()
        cy.url().should('include', 'http://localhost:55958/shop.html')
        
    })

    
})