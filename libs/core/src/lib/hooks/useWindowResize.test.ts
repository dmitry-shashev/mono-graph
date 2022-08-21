import { act, renderHook } from '@testing-library/react'
import { useWindowResize } from './useWindowResize'

describe('useWindowResize', () => {
  it('hook', async () => {
    jest.useFakeTimers()
    const callback = jest.fn()
    renderHook(() => useWindowResize(callback))

    expect(callback).toBeCalledTimes(0)
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    expect(callback).toBeCalledTimes(0)
    jest.advanceTimersByTime(3000)
    expect(callback).toBeCalledTimes(1)
  })
})
