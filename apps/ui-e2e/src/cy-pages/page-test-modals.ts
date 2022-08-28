abstract class PageTestModals {
  public static open(): void {
    cy.visit('/test-modals')
  }

  public static openInfoModal(): void {
    cy.get('[aria-label="Open Info Modal"]').click()
  }

  public static openConfirmationModal(): void {
    cy.get('[aria-label="Open Confirmation Modal"]').click()
  }

  public static openUserModal(): void {
    cy.get('[aria-label="Open User Modal"]').click()
  }

  public static infoModalIsVisible(): void {
    cy.get('[aria-label="Info Modal"]').should('be.visible')
  }

  public static confirmationModalIsVisible(): void {
    cy.get('[aria-label="Confirmation Modal"]').should('be.visible')
  }

  public static userModalIsVisible(): void {
    cy.get('[aria-label="User Modal"]').should('be.visible')
  }

  public static infoModalIsNotVisible(): void {
    cy.get('[aria-label="Info Modal"]').should('not.exist')
  }

  public static confirmationModalIsNotVisible(): void {
    cy.get('[aria-label="Confirmation Modal"]').should('not.exist')
  }

  public static userModalIsNotVisible(): void {
    cy.get('[aria-label="User Modal"]').should('not.exist')
  }

  public static closeInfoModal(): void {
    cy.get('[aria-label="Close Info Modal"]').click()
  }

  public static closeConfirmationModal(): void {
    cy.get('[aria-label="Close Confirmation Modal"]').click()
  }

  public static closeUserModal(): void {
    cy.get('[aria-label="Close User Modal"]').click()
  }

  public static confirmationLabelNotVisible(): void {
    cy.get('[aria-label="Is Confirmed"]').should('not.exist')
  }

  public static confirmationLabelVisible(): void {
    cy.get('[aria-label="Is Confirmed"]').should('be.visible')
  }

  public static submitConfirmationModal(): void {
    cy.get('[aria-label="Confirm Modal"]').click()
  }

  public static userLabelNotVisible(): void {
    cy.get('[aria-label="New User"]').should('not.exist')
  }

  public static fillUserModalForm(firstName: string, lastName: string): void {
    cy.get('[aria-label="First Name"]').clear().type(firstName)
    cy.get('[aria-label="Last Name"]').clear().type(lastName)
  }

  public static submitUserModal(): void {
    cy.get('[aria-label="Submit User Modal"]').click()
  }

  public static userLabelHas(firstName: string, lastName: string): void {
    cy.get('[aria-label="New User"]').should(
      'have.text',
      `${firstName} ${lastName}`
    )
  }
}

export default PageTestModals
