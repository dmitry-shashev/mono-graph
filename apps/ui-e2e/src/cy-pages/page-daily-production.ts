abstract class PageDailyProduction {
  public static open(): void {
    cy.visit('/daily-production')
  }

  public static hasChart(): void {
    cy.contains('Hour')
    cy.contains('Energy Production')
  }
}

export default PageDailyProduction
