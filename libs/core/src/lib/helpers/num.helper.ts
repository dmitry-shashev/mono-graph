export abstract class NumHelper {
  private static percentFormat(value: number, defaultLabel?: string): string {
    if (!value && defaultLabel) {
      return defaultLabel
    }
    return `${Math.round(value)}%`
  }

  public static calcPercent(
    current?: number | null,
    total?: number | null,
    defaultLabel = '-'
  ): string {
    if (total === 0) {
      return this.percentFormat(0, defaultLabel)
    }
    const value = ((current || 0) / (total || 1)) * 100
    return this.percentFormat(value, defaultLabel)
  }
}
