import { render } from '@testing-library/react'
import EmptyLayout from './EmptyLayout'
import { getTestPageMeta } from '../../../test/test-data'
import { ariaLabelInTheDocument } from '@mono-graph/core'

describe('EmptyLayout', () => {
  it('component', async () => {
    const pageMeta = getTestPageMeta()
    render(
      <EmptyLayout pageMeta={pageMeta}>
        <div aria-label="Test Empty" />
      </EmptyLayout>
    )

    await ariaLabelInTheDocument('Test Empty')
  })
})
