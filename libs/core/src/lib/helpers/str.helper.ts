import { encode, decode } from 'js-base64'

type OddEvenFunc = (isHidden?: boolean) => string | undefined

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

  // the main problem - if we hide rows - we can not use selectors for odd/even
  // because in any case they see hidden - even if we use the class selector
  // so for these cases - we can render `null` in the child component - but if
  // we are using ref - we will get `null` instead of the ref even when the component
  // will start rendering again,
  // or we can use this function and add classes programmatically
  public static buildOddEvenFunc(baseValue = 0): OddEvenFunc {
    let state = baseValue
    return (isHidden = false) => {
      if (isHidden) {
        return
      }
      return state++ % 2 ? 'formRowEven' : 'formRowOdd'
    }
  }
}
