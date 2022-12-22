import { ArrHelper } from './arr.helper'

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
})
