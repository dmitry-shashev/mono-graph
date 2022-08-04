describe('ui', () => {
  beforeEach(() => cy.visit('http://localhost:4200/daily-production'))

  it('Check App', () => {
    cy.contains('Energy production by hours')
  })
})
