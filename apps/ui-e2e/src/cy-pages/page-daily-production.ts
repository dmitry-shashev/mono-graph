abstract class PageDailyProduction {
  public static open() {
    cy.visit('/daily-production')
  }

  public static hasChart() {
    cy.contains('Hour')
    cy.contains('Energy Production')
  }
}

export default PageDailyProduction
