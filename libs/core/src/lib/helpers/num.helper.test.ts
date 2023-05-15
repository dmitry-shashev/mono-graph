import { NumHelper } from './num.helper'

describe('num.helper', () => {
  it('calcPercent', async () => {
    expect(NumHelper.calcPercent(12, 24)).toBe('50%')
    expect(NumHelper.calcPercent(12, 0)).toBe('-')
    expect(NumHelper.calcPercent(0, 14)).toBe('-')
    expect(NumHelper.calcPercent(0, 0, '/')).toBe('/')
  })
})
