import * as moment from 'moment/moment'

export abstract class TimeHelper {
  public static getDateLabel(time: Date): string {
    return time.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }

  public static getTimeLabel(time: Date): string {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
  }

  private static dateToFullLabel(date: Date): string {
    const dateLabel = TimeHelper.getDateLabel(date)
    const timeLabel = TimeHelper.getTimeLabel(date)
    return `${dateLabel}, ${timeLabel}`
  }

  public static diffInDays(start: Date, end: Date): number {
    const startMoment = moment.utc(start)
    const endMoment = moment.utc(end)
    return Math.abs(startMoment.diff(endMoment, 'days'))
  }

  public static addPureDays(start: string, days: number): string {
    const startMoment = moment.utc(start)
    const result = startMoment.add(days, 'days').toDate()
    return TimeHelper.dateToFullLabel(result)
  }
}
