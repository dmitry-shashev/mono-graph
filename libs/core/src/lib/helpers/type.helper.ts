import { $enum } from 'ts-enum-util'
import { Sort } from '../constants/sort'

export abstract class TypeHelper {
  public static getEnumValues<T extends Record<keyof T, string | number>>(
    enumKind: T
  ): Array<number | string> {
    return $enum(enumKind).getValues()
  }

  public static getEnumValuesAsRecord<
    T extends Record<keyof T, string | number>,
    P
  >(enumKind: T, defaultValue: P): Record<string | number, P> {
    const allValues = TypeHelper.getEnumValues(enumKind)
    const result = {} as Record<string | number, P>
    allValues.forEach((value) => {
      result[value] = defaultValue
    })
    return result
  }

  public static getEnumValuesAsNum<T extends Record<keyof T, string | number>>(
    enumKind: T
  ): Array<number> {
    return TypeHelper.getEnumValues(enumKind).map(Number)
  }

  public static parseSortFromQuery(param: unknown): Sort {
    const paramToCheck = String(param)
    if (paramToCheck === Sort.Asc) {
      return Sort.Asc
    }
    if (paramToCheck === Sort.Desc) {
      return Sort.Desc
    }
    return Sort.Default
  }

  public static toNullableNumber(value: unknown): number | null {
    if (value === null || value === undefined) {
      return null
    }
    const result = Number(value)
    if (isNaN(result)) {
      return null
    }
    return result
  }

  public static toNullableString(value: unknown): string | null {
    if (value === null || value === undefined) {
      return null
    }
    return String(value)
  }
}
