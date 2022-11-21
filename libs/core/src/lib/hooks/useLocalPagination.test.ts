import { useLocalPagination } from './useLocalPagination'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe('useLocalPagination', () => {
  it('hook', async () => {
    const getPossible = (): Array<number> => [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]
    const data = getPossible()
    const { result } = renderHook(() => useLocalPagination(data))
    expect(result.current.paginatedData).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])

    expect(result.current.pagination.offset).toBe(0)
    expect(result.current.pagination.limit).toBe(10)
    expect(result.current.pagination.total).toBe(12)

    act(() => {
      result.current.setPagination({
        offset: 2,
        limit: 4,
        total: 12,
      })
    })

    expect(result.current.paginatedData).toEqual([3, 4, 5, 6])

    expect(data).toEqual(getPossible())
  })
})
