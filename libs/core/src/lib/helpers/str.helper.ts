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

  public static encodeURLParam(param: string | number): string {
    return encodeURIComponent(StrHelper.base64Encode(param))
  }

  public static decodeURLParam(param: string | number): string {
    return StrHelper.base64Decode(decodeURIComponent(String(param)))
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

  public static toHumanBytes(bytes: number, emptyResult = '0 bytes'): string {
    const precision = 2

    if (bytes >= 1099511627776) {
      return `${(bytes / 1099511627776).toFixed(precision)} TB`
    }
    if (bytes >= 1073741824) {
      return `${(bytes / 1073741824).toFixed(precision)} GB`
    }
    if (bytes >= 1048576) {
      return `${(bytes / 1048576).toFixed(precision)} MB`
    }
    if (bytes >= 1024) {
      return `${(bytes / 1024).toFixed(precision)} KB`
    }
    if (bytes > 1) {
      return `${bytes} bytes`
    }
    if (bytes === 1) {
      return `${bytes} byte`
    }
    return emptyResult
  }

  public static buildCombinedLabel(
    arr: Array<unknown>,
    delimiter = ' / '
  ): string {
    const result = arr.map((v) => String(v ?? '').trim()).filter((v) => !!v)
    return result.join(delimiter)
  }

  public static buildUrlWithGetParams(url: string, params: object): string {
    const paramsRow = Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join('&')
    const result = url.trim().replace('?', '')
    if (!paramsRow) {
      return result
    }
    return `${result}?${paramsRow}`
  }

  public static limitSentenceWithWords(
    sentence: string,
    maxCharactersLength = 20
  ): string {
    const words = sentence.split(' ')
    let result = ''
    for (const word of words) {
      const newResult = result + (result ? ' ' : '') + word
      if (newResult.length > maxCharactersLength) {
        return `${result}...`
      }
      result = newResult
    }
    return result
  }

  public static limitSentenceWithCharacters(
    sentence: string,
    maxCharactersLength = 30
  ): string {
    if (sentence.length <= maxCharactersLength) {
      return sentence
    }
    return `${sentence.slice(0, maxCharactersLength)}...`
  }

  public static formatSentenceByLength(
    sentence: string,
    maxCharactersLength = 20,
    delimiter = '<br />'
  ): string {
    const words = sentence.split(' ')
    let result = ''
    let currentRow = ''
    for (const word of words) {
      currentRow = currentRow + (currentRow ? ' ' : '') + word
      if (currentRow.length > maxCharactersLength) {
        currentRow = word
        result += delimiter
      } else {
        result += result ? ' ' : ''
      }
      result += word
    }
    return result
  }
}
