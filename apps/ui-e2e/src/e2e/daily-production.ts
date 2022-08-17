import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import PageDailyProduction from '../cy-pages/page-daily-production'

Given('I visit the daily production page', () => {
  PageDailyProduction.open()
})

Then('I see the chart', () => {
  PageDailyProduction.hasChart()
})
