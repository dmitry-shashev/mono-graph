import React from 'react'
import { render } from '@testing-library/react'
import { AutoComplete } from './AutoComplete'
import { textNotInTheDocument } from '@mono-graph/core'

describe('AutoComplete', () => {
  it('component', async () => {
    render(<AutoComplete possible={[]} onChange={() => null} />)
    // TODO: add unit tests
    await textNotInTheDocument('123')
  })
})
