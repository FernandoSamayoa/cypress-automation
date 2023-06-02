//cypress - Spec
/// <references types="Cypress"" />

describe('My first Test Suite', function()
{
it('My first case', function(){
    cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',{
        "name": "Learn Appium",
        "lisbn": "bcggsss",
        "aisle": "22s7",
        "author": "John Foe"
    }).then(function(response){
        expect(response.body).to.have.property("Msg","Successfully added")
        expect(response.status).to.eq(200)
    })

})
})