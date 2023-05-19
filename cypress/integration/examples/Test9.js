//cypress - Spec
/// <references types="Cypress"" />

import HomePage from "../pageObjects/HomePage"
import ProductsPage from "../pageObjects/ProductsPage"
import CheckoutPage from "../pageObjects/CheckoutPage"

describe('Frames test', function()
{
    before(function(){
        //runs before all test in the block 
        cy.fixture("example").then(function(data){
            this.data=data
        })
    })

    it.only('Test case 9', function()
    {
        const homePage = new HomePage()
        const productPage = new ProductsPage()
        const checkoutPage = new CheckoutPage()

        
        cy.visit(Cypress.env('url') + "/angularpractice/")
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)

        //validate data.name appears in the input at the bottom
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)

        //validate that first input has min length of 2 
        homePage.getEditBox().should('have.attr','minlength','2')

        //validate that checkbox is disabled 
        homePage.getEntrepeneaur().should('be.disabled')

        //cy.pause() used to debug

        homePage.getShopTab().click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
 
        productPage.getCheckOut().click()

        var total = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            var splitted = $el.text().split(" ")
            total = Number(total) + Number(splitted[1])
        }).then(function(){
            checkoutPage.getTotal().then(function(element){
                var rawValue = element.text().split(" ")
                expect(Number(total)).to.equal(Number(rawValue[1]))
            })
        })

        

        checkoutPage.getCheckout().click()
        checkoutPage.getCountry().type('India')
        Cypress.config('defaultCommandTimeout', 8000) //this is spec level, for general level override on cypress.config.js
        cy.get('.suggestions > ul > li > a').click() //select the first option

        checkoutPage.getAgreement().click({ force: true })
        checkoutPage.getPurchase().click({ force: true })
        //checkoutPage.getAlert().should('have.text', '\n          ×\n          Success! Thank you! Your order will be delivered in next few weeks :-).\n        ')
        checkoutPage.getAlert().then(function (element){
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true //this asserts over an specific way, in this case text.
        })

    })

})