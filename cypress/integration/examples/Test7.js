//cypress - Spec
/// <references types="Cypress"" />

describe('My third Test Suite', function()
{
it('My seventh case', function(){
        
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.get('#opentab').then(function(element)
{
    const url=element.prop('href')
    cy.visit(url)
})

})
})