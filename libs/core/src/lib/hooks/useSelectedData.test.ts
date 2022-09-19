import { act, renderHook } from '@testing-library/react'
import { useSelectedData } from './useSelectedData'

describe('useSelectedData', () => {
  it('hook', async () => {
    const getPossible = (): Array<number> => [2, 4, 8, 12]
    const possible = getPossible()
    const { result } = renderHook(() =>
      useSelectedData({
        possibleData: possible,
        baseSelectedData: [],
      })
    )

    expect(result.current.possibleData).toEqual(getPossible())

    // select several
    expect(result.current.selectedData).toEqual([])
    act(() => {
      result.current.onDataChange(4, true)
    })
    act(() => {
      result.current.onDataChange(8, true)
    })
    expect(result.current.selectedData).toEqual([4, 8])

    // unselect all
    act(() => {
      result.current.onDataChangeAll(false)
    })
    expect(result.current.selectedData).toEqual([])

    // select all
    act(() => {
      result.current.onDataChangeAll(true)
    })
    expect(result.current.selectedData).toEqual(getPossible())

    expect(possible).toEqual(getPossible())
  })
})
