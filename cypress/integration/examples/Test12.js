//cypress - Spec
/// <references types="Cypress"" />

const neatCSV=require('neat-csv')
let productName
let invoiceNumber

describe('token global value test', function()
{
it('is logges via the general method', async()=>{
    //mock the request to force a 404
    cy.LoginApi().then(function(){
        cy.visit("https://rahulshettyacademy.com/client", {
            onBeforeLoad : function(window){
                window.localStorage.setItem('token',Cypress.env('token'))
            }
        })
    })

    cy.get(".card-body b").eq(1).then(function(element){
       productName = element.text()
    })

    cy.get(".card-body button:last-of-type").eq(1).click()
    cy.get(':nth-child(4) > .btn').click()
    cy.contains("Checkout").click()
    cy.get('.form-group > .input').type("ind")


    cy.get(".ta-results button").each(($element, index, $list)=>{
        if(index==1){
            cy.wrap($element).click() //wrap to be able to click the JS element
        }
    })

    cy.get('.btnn').click()
    cy.wait(2000)
    cy.get('table.wrapper td.content-wrap table.content td.box table:nth-child(1) tbody:nth-child(1) tr.ng-star-inserted:nth-child(3) td.em-spacer-1 > label.ng-star-inserted').then(function(element){
        invoiceNumber = element.text().replace(/ /g,"").replace('|',"").replace('|',"")
        console.log(invoiceNumber)
    })
    cy.get('table.wrapper td.content-wrap table.content td.box.box-ext.order-summary-box table.order-summary tbody:nth-child(1) tr:nth-child(4) > button.btn.btn-primary.mt-3.mb-3').click()
    
    cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_fredysamayoa5.csv").then(async function(text){
        const csv = await neatCSV(text)
        console.log(csv)
        const actualProductCSV = csv[0]["Product Name"]
        expect(productName).to.equal(actualProductCSV) //Assert product selected matches the product displayed in confirmation screen

        const actualInvoiceNumber = csv[0]["Invoice Number"] // Assert invoice number
        expect(invoiceNumber).to.equal(actualInvoiceNumber)
    })
    
})
})