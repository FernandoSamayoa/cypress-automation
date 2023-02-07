//cypress - Spec
/// <references types="Cypress"" />

describe('My third Test Suite', function()
{
it('My fourth case', function(){
        
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

//Mouse hover with JQuery

//Mouse hover, show it with JQuery
cy.get('div.mouse-hover-content').invoke('show') 
cy.contains('Top').click()
cy.url().should('include','top')

//Click a hidden element, force it within click method
cy.contains('Top').click({fource: true})
cy.url().should('include','top')

})
})