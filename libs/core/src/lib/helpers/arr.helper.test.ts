import { ArrHelper } from './arr.helper'

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
})
