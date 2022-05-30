/// <reference types="cypress" />

export default class LoginPage
{

visit ()
{
    cy.visit ('https://doodle.com')
    cy.wait(2000)
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('.module__StyledUserActions-sc-8k4x5k-85 > [data-testid="at-text-button"]').click()
}    

FillEmail(value)
{
    const field = cy.get('#username')
    field.clear()
    field.type(value)
    return this
}

FillPassword(value)
{
    const field = cy.get('#password')
    field.clear()
    field.type(value)
    return this
}

Submit()
{
    const button = cy.get('.Button--blue')
    button.click()
}


}

