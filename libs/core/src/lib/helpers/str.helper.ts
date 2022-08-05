import { encode, decode } from 'js-base64'

export abstract class StrHelper {
  public static base64Encode(str: unknown): string {
    if (!str) {
      return ''
    }
    return encode(String(str))
  }

  public static base64Decode(str: unknown): string {
    if (!str) {
      return ''
    }
    return decode(String(str))
  }

  public static formatMoney(value: number): string {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }

  public static isSubstring(main: string, sub: string): boolean {
    const subVal = sub.toLowerCase().trim()
    return main.toLowerCase().trim().includes(subVal)
  }

  public static isSubstringInObj<T>(
    data: T,
    fields: Array<keyof T>,
    sub: string
  ): boolean {
    return fields.some((field) => {
      return StrHelper.isSubstring(String(data[field]), sub)
    })
  }
}
