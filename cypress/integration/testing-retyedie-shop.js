/// <reference types="cypress" />

context("Testing Re Tie Dye Shop Page", () => {
    beforeEach(() => {
        cy.visit("/shop.html")
    })

    it("Click image garmet and make sure it opens garmet modal", () => {
        cy.get("[data-target='#garmetoneModal']").click()
        cy.get("[id='garmetoneModal']").should("be.visible")
    })

    it("Click 'Bid' call to action, modal should open", () => {
        cy.get("u").eq(0).click()
        cy.get("[class='modal-content'").should("have.descendants", "div")
    })

    it("Click 'Bid' call to action, modal should open, fill out email address text input click  submit", () => {
        cy.get("u").eq(0).click()
        cy.get("[class='modal-content'").should("have.descendants", "div")
        cy.get("[id='email']").type("test@testemail.com")
        cy.get("[type='submit']").click()
    })

    it("Click 'Bid' call to action, modal should open, fill out form and submit", () => {
        cy.intercept('POST', '/shop.html')

        cy.get("u").eq(0).click()
        cy.get("[class='modal-content'").should("have.descendants", "div")
        cy.get("[id='email']").type("test@testemail.com")
        cy.get("[id='repeatEmail'").type("test@testemail.com")
        cy.get("[id='exampleCheck1']").check()
        cy.get("[type='submit']").click()
    })

})