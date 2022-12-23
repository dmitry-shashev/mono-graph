import React, { ReactElement, useState } from 'react'
import { render } from '@testing-library/react'
import { Tabs } from './Tabs'
import {
  ariaLabelInTheDocument,
  ariaLabelIsNotVisible,
  ariaLabelIsVisible,
  clickByAriaLabel,
} from '@mono-graph/core'

function Test(): ReactElement {
  const [tab, setTab] = useState<number>(1)
  return (
    <Tabs titles={['1', '2', '3']} currentTab={tab} onTabChange={setTab}>
      <div aria-label="First" />
      <div aria-label="Second" />
      <div aria-label="Third" />
    </Tabs>
  )
}

describe('Tabs', () => {
  it('component', async () => {
    render(<Test />)

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
