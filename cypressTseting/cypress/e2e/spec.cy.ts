describe('template spec', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
  it('Does not do much!', () => {
    cy.visit('http://localhost:4200/');
  })
  it('Does not do much!', () => {
    cy.get("h1").should("contain", "My First Post");
  })
  it('Button testing with id btn', () => {
    cy.get('#btn').should('contain', 'Button')
  })
})  