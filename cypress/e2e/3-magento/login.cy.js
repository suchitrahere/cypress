describe('Login',()=> {
  it('Checking the url loads fine', () => {
   cy.visit("https://magento.softwaretestingboard.com/customer/account/login")
   cy.contains('Sign In')} )
})