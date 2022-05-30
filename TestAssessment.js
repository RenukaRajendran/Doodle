/// <reference types="cypress" />

import { should } from 'chai'
import LoginPage from '../PageObjects/LoginPage'

describe ('Test Suite', function() {

    it ('Valid Login Test', function() {

        const login=new LoginPage()
        login.visit()
        login.FillEmail('renuka@mailinator.com')
        login.FillPassword('renuka01')
        login.Submit()
        cy.wait(5000)
        cy.title().should('be.equal','Doodle–Dashboard')
     })

 })


