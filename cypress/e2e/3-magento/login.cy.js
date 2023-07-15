describe('Login', () => {
  beforeEach(()=>{
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login")
  })

  it('Checking the url loads fine', () => {
    cy.contains('Sign In')
  })

  it('Verify if email ID text field exists', () => {
    cy.get('#email').should('have.length', 1);
  })
})
