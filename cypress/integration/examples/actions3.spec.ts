/// <reference types="cypress" />

describe('Sample cypress with typescript3', () => {

  beforeEach(() => {
    cy.visit('https://www.google.com/')
  })

  it('Visit google.com', () => {
    const search: string = 'Google'
    cy.visitGoogle(search)
    cy.loginApi('test@gmail.com', '20Scoops#',200, 'message','successed')
  })

})