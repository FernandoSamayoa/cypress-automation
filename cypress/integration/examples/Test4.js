//cypress - Spec
/// <references types="Cypress"" />

describe('My third Test Suite', function()
{
it('My fourth case', function(){
        
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.get('#alertbtn').click()
cy.get('#confirmbtn').click()
//Handle window alert, CY auto accepts them but what if I want to validate content on it? 
cy.on('window:alert', (str)=>{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

cy.on('window:confirm', (str)=>{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

//CY doesn't suppor multi tab testing, we need to force child links open in the parent tab
//Manipulate DOM to delete target atribute from Cypress 

cy.get('#opentab').invoke('removeAttr','target').click()
cy.url().should('include','rahulshettyacademy.com')
cy.go('back')

})
})