//cypress - Spec
/// <references types="Cypress"" />

describe('My third Test Suite', function()
{
it('My Second case', function(){
        
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.get("#checkBoxOption1").check().should('be.checked').and('have.value', 'option1')
cy.get("#checkBoxOption1").uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2','option3']) //locate all checkboxes and only select some of them

//static dropdown 

cy.get('select').select('option2').should('have.value','option2')

//dynamic dropdown

cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(($el, index,  $list) => {

    if($el.text() === "India"){
        $el.click()
    }
})

cy.get('#autocomplete').should('have.value', 'India')

//visible or invisible elements ex

cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')


//selecting a radio button 

cy.get('[value=radio2]').click().should('be.checked')

})
})