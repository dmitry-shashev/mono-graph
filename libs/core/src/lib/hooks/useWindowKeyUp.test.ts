import { renderHook } from '@testing-library/react'
import { useWindowKeyUp } from './useWindowKeyUp'
import userEvent from '@testing-library/user-event'

describe('useWindowKeyUp', () => {
  it('hook', async () => {
    const callback = jest.fn()
    renderHook(() => useWindowKeyUp(['a', 'b'], callback))

    expect(callback).toBeCalledTimes(0)
    await userEvent.keyboard('a')
    expect(callback).toBeCalledTimes(1)
    await userEvent.keyboard('c')
    expect(callback).toBeCalledTimes(1)
    await userEvent.keyboard('b')
    expect(callback).toBeCalledTimes(2)
  })
})
