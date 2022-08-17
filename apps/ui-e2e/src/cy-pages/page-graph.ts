abstract class PageGraph {
  public static open() {
    cy.visit('/graph')
  }

  public static hasDiagram() {
    cy.contains('consumption')
    cy.contains('import')
    cy.contains('export')
  }
}

export default PageGraph
