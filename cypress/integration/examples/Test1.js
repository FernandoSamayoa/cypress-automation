//cypress - Spec
/// <references types="Cypress"" />

describe('My first Test Suite', function()
{
it('My first case', function(){
        
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca');
cy.wait(2000);
cy.get('.product').should('have.length',5); //we have 1 product that is invisible
//Looking in the ENTIRE page
cy.get('.product:visible').should('have.length',4);
//Parent Child chaining
cy.get('.products').as('productlocator') //aliasing the product get to optimize the future calls
cy.get('@productlocator').find('.product').should('have.length', 4);
cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()

cy.get('@productlocator')
    .find('.product')
    .each(($el, index, $list) => {
        const textVeg=$el.find('.product-name').text()
        if(textVeg.includes('Cashews')){
            cy.wrap($el).find('button').click() //click deprecated for promises, that's why we wrap it up. 
        }
    })

//Assertion if logo value is fine
cy.get('.brand').should('have.text', 'GREENKART')    
//Print in log
cy.get('.brand').then(function(arg){
    cy.log(arg.text())
})





})
})