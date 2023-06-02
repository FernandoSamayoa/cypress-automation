//cypress - Spec
/// <references types="Cypress"" />

describe('My first Test Suite', function()
{
it('My first case', function(){
    //mock the request to force a 404
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 
    (req)=>{
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
        req.continue((res)=>{
            expect(res.statusCode).to.equal(404)
        })
    }).as('mock')
    cy.get("button[class='btn btn-primary']").click()
    cy.wait('@mock')


})
})