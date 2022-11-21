import { TimeHelper } from './time.helper'

describe('time.helper', () => {
  it('getDateLabel', async () => {
    expect(TimeHelper.getDateLabel(new Date('2022-11-08T19:13:15.632Z'))).toBe(
      '11/08/2022'
    )
    expect(TimeHelper.getDateLabel(new Date('2021-04-09T19:13:15.632Z'))).toBe(
      '04/09/2021'
    )
  })

  it('getTimeLabel', () => {
    expect(
      TimeHelper.getTimeLabel(new Date('2022-11-08T19:13:15.632Z'), 'Etc/GMT-0')
    ).toBe('19:13:15')
  })
})
