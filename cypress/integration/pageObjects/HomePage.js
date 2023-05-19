class HomePage
{

    getEditBox()
    {
        return cy.get(':nth-child(1) > .form-control')
    }

    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-pristine')
    }

    getGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }

    getEntrepeneaur()
    {
        return cy.get('#inlineRadio3')
    }

    getShopTab()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage //export to make it visible to other classes 