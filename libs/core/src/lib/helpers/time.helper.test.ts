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

  it('dateToFullLabel', () => {
    expect(
      TimeHelper.dateToFullLabel(
        new Date('2022-11-08T19:13:15.632Z'),
        'Etc/GMT-0'
      )
    ).toBe('11/08/2022, 19:13:15')
  })

  it('diffInDays', () => {
    expect(
      TimeHelper.diffInDays(
        new Date('2023-11-08T19:13:15.632Z'),
        new Date('2022-10-08T02:11:15.632Z')
      )
    ).toBe(396)
    expect(
      TimeHelper.diffInDays(
        new Date('2022-10-08T02:11:15.632Z'),
        new Date('2023-11-08T19:13:15.632Z')
      )
    ).toBe(396)
  })

  it('addPureDays', () => {
    expect(TimeHelper.addPureDays('2022-10-08T02:11:15.632Z', 396)).toBe(
      '11/08/2023'
    )
  })
})
