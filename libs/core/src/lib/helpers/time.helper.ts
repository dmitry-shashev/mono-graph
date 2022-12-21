export abstract class TimeHelper {
  public static getDateLabel(time: Date): string {
    return time.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }

  public static getTimeLabel(time: Date, timeZone?: string): string {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone,
    })
  }

  public static dateToFullLabel(date: Date, timeZone?: string): string {
    const dateLabel = TimeHelper.getDateLabel(date)
    const timeLabel = TimeHelper.getTimeLabel(date, timeZone)
    return `${dateLabel}, ${timeLabel}`
  }

  public static diffInDays(start: Date, end: Date): number {
    const startHandled: Date = new Date(start)
    startHandled.setHours(0, 0, 0, 0)
    const endHandled: Date = new Date(end)
    endHandled.setHours(0, 0, 0, 0)
    const diff = endHandled.getTime() - startHandled.getTime()
    return Math.ceil(Math.abs(diff / (1000 * 60 * 60 * 24)))
  }

  public static addPureDays(start: string, days: number): string {
    const result = new Date(start)
    result.setDate(result.getDate() + days)
    return TimeHelper.getDateLabel(result)
  }
}
