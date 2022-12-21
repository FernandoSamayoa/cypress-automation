//cypress - Spec
/// <references types="Cypress"" />

describe('My second Test Suite', function()
{
it('My Second case', function(){
        
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca');
cy.wait(2000);
//Parent Child chaining
cy.get('.products').as('productlocator') //aliasing the product get to optimize the future calls
cy.get('@productlocator')
    .find('.product')
    .each(($el, index, $list) => {
        const textVeg=$el.find('.product-name').text()
        if(textVeg.includes('Cashews')){
            cy.wrap($el).find('button').click() //click deprecated for promises, that's why we wrap it up. 
        }
    })

    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.wait(2000);
    //cy.get(':nth-child(14)').click()
    cy.contains('Place Order').click()

})
})