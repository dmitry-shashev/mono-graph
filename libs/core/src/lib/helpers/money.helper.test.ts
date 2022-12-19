import { MoneyHelper } from './money.helper'

describe('money.helper', () => {
  it('money.helper', async () => {
    expect(MoneyHelper.format(122.32)).toBe('$122.32')
  })
})
