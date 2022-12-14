abstract class PageProfile {
  public static open(): void {
    cy.visit('/profile')
  }

  public static fillTheForm(firstName: string, lastName: string): void {
    cy.get('[aria-label="First Name"]').clear().type(firstName)
    cy.get('[aria-label="Last Name"]').clear().type(lastName)
  }

  public static submitTheForm(): void {
    cy.get('[aria-label="Submit the form"]').click()
    cy.get('[aria-label="Submit the form"]').should('have.attr', 'disabled')
    cy.get('[aria-label="Submit the form"]').should('not.have.attr', 'disabled')
  }

  public static checkTheTopFullName(fullName: string): void {
    cy.get('[aria-label="Full Name"]').should('have.text', fullName)
  }
}

export default PageProfile
