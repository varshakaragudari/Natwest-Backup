describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
  it('Visit1!', () => {
    cy.visit('https://example.cypress.io')
  })
  it('Visit2!', () => {
    cy.contains('type').click()
  })
  // it('Visit!', () => {
   
  // })
  // it('Visit!', () => {
    
  // })
})