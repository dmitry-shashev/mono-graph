import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import PageTestTabs from '../cy-pages/page-test-tabs'

Given('I visit the test tabs page', () => {
  PageTestTabs.open()
})

When('I see the current tab title {string}', (tabTitle: string) => {
  PageTestTabs.currentActiveTabTitleIs(tabTitle)
})

Then('I see the tab content {string}', (tabContent: string) => {
  PageTestTabs.tabsContentVisible(tabContent)
})

Then('I do not see tab content {string}', (tabContent: string) => {
  PageTestTabs.tabsContentNotVisible(tabContent)
})

When('I select the tab {string}', (tabTitle: string) => {
  PageTestTabs.goToTab(tabTitle)
})
