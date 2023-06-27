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

  it('getCurrentYear', () => {
    jest.useFakeTimers()

    jest.setSystemTime(new Date('2021-12-31'))
    expect(TimeHelper.getCurrentYear()).toBe('2021')

    jest.setSystemTime(new Date('2023-06-01'))
    expect(TimeHelper.getCurrentYear()).toBe('2023')

    jest.useRealTimers()
  })

  it('getLast5Years', () => {
    jest.useFakeTimers()

    jest.setSystemTime(new Date('2021-12-31'))
    expect(TimeHelper.getLast5Years()).toEqual([
      '2021',
      '2020',
      '2019',
      '2018',
      '2017',
    ])

    jest.setSystemTime(new Date('2023-06-01'))
    expect(TimeHelper.getLast5Years()).toEqual([
      '2023',
      '2022',
      '2021',
      '2020',
      '2019',
    ])

    jest.useRealTimers()
  })

  it('getMonthNumber', () => {
    expect(TimeHelper.getMonthNumber('2023-4-12 04:15')).toBe(3)
    expect(TimeHelper.getMonthNumber('2023-1-09 18:15')).toBe(0)
  })

  it('isValidDate', () => {
    expect(TimeHelper.isValidDate(null)).toBe(false)
    expect(TimeHelper.isValidDate(undefined)).toBe(false)
    expect(TimeHelper.isValidDate('')).toBe(false)

    expect(TimeHelper.isValidDate('123')).toBe(true)
    expect(TimeHelper.isValidDate('2023-06-27T09:33:17.879Z')).toBe(true)
  })
})
