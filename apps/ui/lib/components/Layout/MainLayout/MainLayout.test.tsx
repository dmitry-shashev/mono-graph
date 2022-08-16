import MainLayout from './MainLayout'
import { getTestPageMeta } from '../../../test/test-data'
import { ariaLabelInTheDocument } from '@mono-graph/core'
import { renderWithProviders } from '../../../test/test-utils'

describe('MainLayout', () => {
  it('component', async () => {
    const pageMeta = getTestPageMeta()
    await renderWithProviders(
      <MainLayout pageMeta={pageMeta}>
        <div aria-label="Test Main" />
      </MainLayout>
    )

    await ariaLabelInTheDocument('Test Main')
    await ariaLabelInTheDocument('Top Navigation')
  })
})
