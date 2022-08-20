import { ReactElement } from 'react'
import { render, screen, RenderResult } from '@testing-library/react'
import { AppStore, createAppStore } from '@mono-graph/store'
import { EMPTY_PAGE_META, ResourceService } from '@mono-graph/core'
import { Provider } from 'react-redux'
import Layout from '../components/Layout/Layout'
import { getTestUser } from './test-data'

jest.mock('@mono-graph/core')

function mockServices(): void {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ResourceService.getUser.mockImplementation(async () => getTestUser())
}

export async function renderWithProviders(
  component: ReactElement,
  waitForText?: string
): Promise<RenderResult & { store: AppStore }> {
  mockServices()
  const newStore = createAppStore()
  const result = render(
    <Provider store={newStore}>
      <Layout pageMeta={EMPTY_PAGE_META}>{component}</Layout>
    </Provider>
  )
  if (waitForText) {
    await screen.findByText(waitForText)
  }
  return {
    ...result,
    store: newStore,
  }
}
