abstract class PageGraph {
  public static open(): void {
    cy.visit('/graph')
  }

  public static hasDiagram(): void {
    cy.contains('consumption')
    cy.contains('import')
    cy.contains('export')
  }
}

export default PageGraph
