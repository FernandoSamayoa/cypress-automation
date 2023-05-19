class checkoutPage
{
    getCheckout()
    {
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }

    getCountry()
    {
        return cy.get('#country')
    }

    getAgreement()
    {
        return cy.get('.checkbox')
    }

    getPurchase()
    {
        return cy.get('.ng-untouched > .btn')
    }

    getAlert()
    {
        return cy.get('.alert')
    }

    getTotal()
    {
        return cy.get('h3 > strong')
    }
}

export default checkoutPage