export abstract class ArrHelper {
  public static sum(arr: ReadonlyArray<unknown>): number {
    let result = 0
    arr.forEach((v) => {
      const valueToAdd = Number(v)
      if (isNaN(valueToAdd)) {
        return
      }
      result += valueToAdd
    })
    return result
  }

  public static allValuesEmpty(arr?: ReadonlyArray<unknown>): boolean {
    if (!arr) {
      return true
    }
    const sum = ArrHelper.sum(arr)
    return sum === 0
  }

  public static addUnique<T>(
    value: T,
    arr: ReadonlyArray<T>,
    compareFunc = (a: T, b: T) => a === b
  ): Array<T> {
    const result: Array<T> = [...arr]
    // add if not found
    if (!result.find((v) => compareFunc(v, value))) {
      result.push(value)
    }
    return result
  }

  // { a: 1 }, { a: 3 }
  // will become
  // [undefined, { a: 1 }, undefined, { a: 3 } ]
  public static assignByField<T>(
    field: keyof T,
    baseArr?: Array<T> | null,
    offset = 0
  ): Array<T | undefined> {
    if (!baseArr || !field) {
      return []
    }
    const result: Array<T | undefined> = []
    baseArr.forEach((v) => {
      result[Number(v[field]) - offset] = v
    })
    return result
  }
}
