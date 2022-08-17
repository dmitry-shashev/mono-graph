import { FC } from 'react'
import { act, render } from '@testing-library/react'
import { useError } from './useError'
import { createAppStore } from '../store'
import { Provider } from 'react-redux'
import { errorSlice, StoreErrorPayload } from '../reducers/errorSlice'
import {
  ariaLabelContainText,
  ariaLabelNotContainText,
  clickByAriaLabel,
} from '@mono-graph/core'
import { PayloadAction } from '@reduxjs/toolkit'

const Test: FC = () => {
  const [error, resetError] = useError('a')
  return (
    <div>
      <div aria-label="Error">{error}</div>
      <button aria-label="Clear" onClick={() => resetError()}></button>
    </div>
  )
}

describe('useError', () => {
  it('hook', async () => {
    const { storeError } = errorSlice.actions
    const store = createAppStore()
    const dispatch = store.dispatch as (
      action: PayloadAction<StoreErrorPayload>
    ) => void

    render(
      <Provider store={store}>
        <Test />
      </Provider>
    )

    await ariaLabelNotContainText('Error', '123')
    act(() => {
      dispatch(
        storeError({
          actionType: 'b',
          message: '123',
        })
      )
    })
    await ariaLabelNotContainText('Error', '123')
    act(() => {
      dispatch(
        storeError({
          actionType: 'a',
          message: '123',
        })
      )
    })
    await ariaLabelContainText('Error', '123')

    // clear the error
    await clickByAriaLabel('Clear')
    await ariaLabelNotContainText('Error', '123')
  })
})
