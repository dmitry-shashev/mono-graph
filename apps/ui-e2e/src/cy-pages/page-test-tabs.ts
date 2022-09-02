abstract class PageTestTabs {
  public static open(): void {
    cy.visit('/test-tabs')
  }

  public static goToTab(tabTitle: string): void {
    cy.contains(tabTitle).click()
  }

  public static currentActiveTabTitleIs(tabTitle: string): void {
    cy.contains('[class*="Tabs_activeTabTitle"]', tabTitle)
  }

  public static tabsContentVisible(content: string): void {
    cy.contains(content).should('be.visible')
  }

  public static tabsContentNotVisible(content: string): void {
    cy.contains(content).should('not.be.visible')
  }
}

export default PageTestTabs
