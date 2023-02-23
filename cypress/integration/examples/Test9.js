//cypress - Spec
/// <references types="Cypress"" />

describe('Frames test', function()
{
    before(function(){
        //runs before all test in the block 
        cy.fixture("example").then(function(data){
            this.data=data
        })
    })

    it('Test case 1', function()
    {
        cy.visit("http://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)

        //validate data.name appears in the input at the bottom
        cy.get(':nth-child(4) > .ng-pristine').should('have.value',this.data.name)

        //validate that first input has min length of 2 
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')

        //validate that checkbox is disabled 
        cy.get('#inlineRadio3').should('be.disabled')


        cy.visit("http://rahulshettyacademy.com/angularpractice/shop")
        cy.selectProduct('Blackberry')

    })

})