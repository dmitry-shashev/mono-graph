import { useActiveRequests } from './useActiveRequests'
import { FC } from 'react'
import {
  ariaLabelInTheDocument,
  ariaLabelNotInTheDocument,
} from '@mono-graph/core'
import { requestSlice } from '../reducers/requestSlice'
import { createAppStore } from '../store'
import { act, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { PayloadAction } from '@reduxjs/toolkit'

const ARIA_LABEL_LOADING = 'Loading'

const Test: FC = () => {
  const loading = useActiveRequests(['c'])
  if (loading) {
    return <div aria-label={ARIA_LABEL_LOADING} />
  }
  return null
}

describe('useActiveRequest', () => {
  it('hook', async () => {
    const { startRequest, stopRequest } = requestSlice.actions
    const store = createAppStore()
    const dispatch = store.dispatch as (action: PayloadAction<string>) => void

    render(
      <Provider store={store}>
        <Test />
      </Provider>
    )

    act(() => {
      dispatch(startRequest('a'))
      dispatch(startRequest('b'))
    })

    await ariaLabelNotInTheDocument(ARIA_LABEL_LOADING)
    act(() => {
      dispatch(startRequest('c'))
    })
    await ariaLabelInTheDocument(ARIA_LABEL_LOADING)
    act(() => {
      dispatch(stopRequest('c'))
    })
    await ariaLabelNotInTheDocument(ARIA_LABEL_LOADING)
  })
})
