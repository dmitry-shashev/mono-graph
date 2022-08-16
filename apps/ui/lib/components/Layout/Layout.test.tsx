import { render } from '@testing-library/react'
import Layout from './Layout'
import { getTestPageMeta } from '../../test/test-data'
import { ariaLabelInTheDocument, textInTheDocument } from '@mono-graph/core'
import MainLayout from './MainLayout/MainLayout'

jest.mock('./MainLayout/MainLayout', (): typeof MainLayout => {
  return (props) => <div aria-label="Test Main Layout">{props.children}</div>
})

jest.mock('next/head', () => {
  return (props) => <>{props.children}</>
})

describe('Layout', () => {
  it('component', async () => {
    const pageMeta = getTestPageMeta()

    render(
      <Layout pageMeta={pageMeta}>
        <div aria-label="Test Content" />
      </Layout>
    )

    await ariaLabelInTheDocument('Test Main Layout')
    await ariaLabelInTheDocument('Test Content')
    await textInTheDocument(pageMeta.title)
  })
})
