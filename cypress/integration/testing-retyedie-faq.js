/// <reference types="cypress" />

context("Testing Re Tie Dye FAQ Page", () => {

    beforeEach(() => {
        cy.visit("/faq.html")
    })

    it("Clicking question opens and makes answer visable", () => {
        cy.get("[data-target='#collapseOne']").click()
        cy.get("[id='collapseOne']").should("be.visible")
    })

    it("Confirming CSS changes once the question opens and makes answer visable", () => {
        cy.get("[data-target='#collapseNine']").should('not.have.css', 'btn btn-block text-left faq-btn-question collapsed')
    })


})