import { ArrHelper } from './arr.helper'
import { getTestSortArr } from '../tests/test-data'

interface TestElem {
  id: number
  no: string
}

describe('arr.helper', () => {
  it('sum', async () => {
    expect(ArrHelper.sum([false, null, 2, undefined, 3])).toBe(5)
    expect(ArrHelper.sum([])).toBe(0)
  })

  it('allValuesEmpty', () => {
    expect(ArrHelper.allValuesEmpty()).toBe(true)
    expect(ArrHelper.allValuesEmpty([])).toBe(true)
    expect(ArrHelper.allValuesEmpty([false, undefined, 0])).toBe(true)
    expect(ArrHelper.allValuesEmpty([false, undefined, 1])).toBe(false)
  })

  it('addUnique', () => {
    const getData = (): Array<number> => [3, 7, 8]
    const data = getData()

    expect(ArrHelper.addUnique(3, getData())).toEqual(getData())
    expect(ArrHelper.addUnique(12, getData())).toEqual([3, 7, 8, 12])

    expect(data).toEqual(getData())
  })

  it('addUnique - custom compare fn', () => {
    const getData = (): ReadonlyArray<TestElem> => [
      {
        id: 1,
        no: '2a',
      },
      {
        id: 2,
        no: '1a',
      },
    ]
    const data = getData()

    expect(
      ArrHelper.addUnique(
        {
          id: 2,
          no: 'lopata',
        },
        data,
        (a, b) => a.id === b.id
      )
    ).toEqual(getData())
    expect(
      ArrHelper.addUnique(
        {
          id: 2,
          no: 'lopata',
        },
        data,
        (a, b) => a.no === b.no
      )
    ).toEqual([
      ...data,
      {
        id: 2,
        no: 'lopata',
      },
    ])

    expect(data).toEqual(getData())
  })

  it('assignByField', () => {
    expect(ArrHelper.assignByField('123', undefined)).toEqual([])
    expect(ArrHelper.assignByField('test', null)).toEqual([])

    const data = getTestSortArr()

    expect(ArrHelper.assignByField('value', data)).toEqual([
      undefined,
      data[2],
      undefined,
      data[0],
      undefined,
      undefined,
      undefined,
      data[1],
    ])

    expect(ArrHelper.assignByField('value', data, 1)).toEqual([
      data[2],
      undefined,
      data[0],
      undefined,
      undefined,
      undefined,
      data[1],
    ])

    expect(data).toEqual(getTestSortArr())
  })

  it('splitArray', () => {
    expect(ArrHelper.splitArray([])).toEqual([[], []])
    expect(ArrHelper.splitArray(null)).toEqual([[], []])
    expect(ArrHelper.splitArray(undefined)).toEqual([[], []])
    expect(ArrHelper.splitArray([1, 2, 3, 4, 5])).toEqual([
      [1, 2, 3],
      [4, 5],
    ])
  })
})
