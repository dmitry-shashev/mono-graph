import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import PageGraph from '../cy-pages/page-graph'

Given('I visit the graph page', () => {
  PageGraph.open()
})

Then('I see the diagram', () => {
  PageGraph.hasDiagram()
})
