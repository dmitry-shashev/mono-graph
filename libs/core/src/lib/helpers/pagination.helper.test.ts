import { PaginationHelper } from './pagination.helper'
import {
  getTestAveragePagination,
  getTestEndPagination,
  getTestSmallData,
  getTestSmallPagination,
  getTestStartPagination,
} from '../tests/test-data'

describe('pagination.helper', () => {
  it('firstPage', async () => {
    const testPagination = getTestAveragePagination()
    const firstPage = PaginationHelper.firstPage(testPagination)
    expect(firstPage.offset).toBe(0)
    expect(firstPage.limit).toBe(testPagination.limit)
    expect(firstPage.total).toBe(testPagination.total)

    expect(testPagination).toEqual(getTestAveragePagination())
  })

  it('lastPage', async () => {
    const testPagination = getTestAveragePagination()
    const lastPage = PaginationHelper.lastPage(testPagination)
    expect(lastPage.offset).toBe(testPagination.total - testPagination.limit)
    expect(lastPage.limit).toBe(testPagination.limit)
    expect(lastPage.total).toBe(testPagination.total)

    expect(testPagination).toEqual(getTestAveragePagination())
  })

  it('nextPage', () => {
    const testPagination = getTestAveragePagination()
    const nextPage = PaginationHelper.nextPage(testPagination)
    expect(nextPage.offset).toBe(testPagination.offset + testPagination.limit)
    expect(nextPage.limit).toBe(testPagination.limit)
    expect(nextPage.total).toBe(testPagination.total)

    const testMaxPage = getTestEndPagination()
    const nextMaxPage = PaginationHelper.nextPage(testMaxPage)
    expect(nextMaxPage).toEqual(testMaxPage)

    expect(testPagination).toEqual(getTestAveragePagination())
    expect(testMaxPage).toEqual(getTestEndPagination())
  })

  it('prevPage', () => {
    const testPagination = getTestAveragePagination()
    const prevPage = PaginationHelper.prevPage(testPagination)
    expect(prevPage.offset).toBe(testPagination.offset - testPagination.limit)
    expect(prevPage.limit).toBe(testPagination.limit)
    expect(prevPage.total).toBe(testPagination.total)

    const testMinPage = getTestStartPagination()
    const prevMinPage = PaginationHelper.prevPage(testMinPage)
    expect(prevMinPage).toEqual(testMinPage)

    expect(prevPage).not.toEqual(testPagination)
  })

  it('applyPagination', () => {
    const testData = getTestSmallData()
    const testPagination = getTestSmallPagination()

    expect(PaginationHelper.applyPagination(testData, testPagination)).toEqual([
      5, 6,
    ])
    expect(PaginationHelper.applyPagination(testData)).toEqual([
      ...getTestSmallData(),
    ])
    expect(PaginationHelper.applyPagination(undefined, testPagination)).toBe(
      undefined
    )
  })

  it('isPaginationForbidden', () => {
    expect(
      PaginationHelper.isPaginationForbidden({
        limit: 10,
        total: 8,
        offset: 2,
      })
    ).toBe(true)
    expect(
      PaginationHelper.isPaginationForbidden({
        limit: 4,
        total: 8,
        offset: 2,
      })
    ).toBe(false)
    expect(PaginationHelper.isPaginationForbidden(undefined)).toBe(true)
  })
})
