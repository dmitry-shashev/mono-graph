import React from 'react'
import { render } from '@testing-library/react'
import { Tabs } from './Tabs'
import {
  ariaLabelInTheDocument,
  ariaLabelIsNotVisible,
  ariaLabelIsVisible,
  clickByAriaLabel,
} from '@mono-graph/core'

describe('Tabs', () => {
  it('component', async () => {
    render(
      <Tabs titles={['1', '2', '3']} currentIndex={1}>
        <div aria-label="First" />
        <div aria-label="Second" />
        <div aria-label="Third" />
      </Tabs>
    )

    await ariaLabelInTheDocument('First')
    await ariaLabelInTheDocument('Second')
    await ariaLabelInTheDocument('Third')

    await ariaLabelIsNotVisible('Tab content for - 1')
    await ariaLabelIsVisible('Tab content for - 2')
    await ariaLabelIsNotVisible('Tab content for - 3')

    // switch the tab
    await clickByAriaLabel('Go to tab - 3')

    await ariaLabelInTheDocument('First')
    await ariaLabelInTheDocument('Second')
    await ariaLabelInTheDocument('Third')

    await ariaLabelIsNotVisible('Tab content for - 1')
    await ariaLabelIsNotVisible('Tab content for - 2')
    await ariaLabelIsVisible('Tab content for - 3')
  })
})
