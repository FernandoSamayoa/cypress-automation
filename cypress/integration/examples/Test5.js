//cypress - Spec
/// <references types="Cypress"" />

describe('My third Test Suite', function()
{
it('My fourth case', function(){
        
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

//Tables 

cy.get('tr td:nth-child(2)').each(($el, index, $list)=> {

    if($el.text().includes("Master Selenium Automation in simple Python Language"))
    {
        cy.get($el).next().then(function(price){ //next travels to sibling element

            expect(price.text()).to.equal('25')
        })
    }

})

})
})