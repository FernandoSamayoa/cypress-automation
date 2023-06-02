//cypress - Spec
/// <references types="Cypress"" />

describe('My first Test Suite', function()
{
it('My first case', function(){
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    cy.intercept({
        method: 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    },{
        statusCode : 200, 
        body : [
            {
                "book_name":"null",
                "isbn":"SPY40",
                "aisle":"2529857"
            }
        ]
    }).as('bookRetrievals') //this mocks a JSON response
    cy.get("button[class='btn btn-primary']").click()
    cy.wait('@bookRetrievals').then(({request, response}) => 
    {
        cy.get('tr').should('have.length', response.body.length+1)
    })
    cy.get('p').should('have.text','Oops only 1 Book available')


    //length of the response array = row table 


})
})