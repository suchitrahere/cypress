describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email');
    cy.get('#email').type('suchitra.sahadevan@gmail.com');
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').clear();
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Suchi@123');
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
    cy.get('#ui-id-11 > span').click();
    cy.get('.swatch-opt-1396 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49').click();
    cy.get(':nth-child(1) > .product-item-info > .details > .product-item-inner > .product > .actions-primary > form > .action > span').click();
    cy.get('#option-label-color-93-item-57').click();
    cy.get('#product-addtocart-button > span').click();
    cy.get('#option-label-color-93-item-57').click();
    cy.get('#option-label-size-143-item-168').click();
    cy.get('#product-addtocart-button > span').click();
    cy.get('#option-label-color-93-item-50').click();
    cy.get('#product-addtocart-button').click();
    cy.get('.showcart > .counter').click();
    cy.get('#top-cart-btn-checkout').click();
    cy.get('#B1WJOJ1').clear('T');
    cy.get('#B1WJOJ1').type('Test companay');
    cy.get('#OKK4SO3').clear('S');
    cy.get('#OKK4SO3').type('S1');
    cy.get('#LK40LLM').click();
    cy.get('#AXH1C67').clear('B');
    cy.get('#AXH1C67').type('Berlin');
    cy.get('#E9N2TTN').select('18');
    cy.get('#checkout-step-shipping').click();
    cy.get('#RUVQTWS').clear('1');
    cy.get('#RUVQTWS').type('12689');
    cy.get('#checkout-step-shipping').click();
    cy.get('#AX2V29S').clear('15');
    cy.get('#AX2V29S').type('15203209964');
    cy.get('#checkout').click();
    cy.get(':nth-child(2) > :nth-child(1) > .radio').check();
    cy.get('.button').click();
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action > span').click();
    cy.get('.checkout-success > .actions-toolbar > div.primary > .action > span').click();
    /* ==== End Cypress Studio ==== */
  })
})