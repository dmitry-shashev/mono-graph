import { $enum } from 'ts-enum-util'

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
}
