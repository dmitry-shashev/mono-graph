import { Value, ValueMatrix, ValueMatrixReadOnly } from '../interfaces/value'

export abstract class ValueHelper {
  public static filterMatrixByArr(
    baseMatrix: ValueMatrixReadOnly,
    filteredArr: ReadonlyArray<Value>
  ): ValueMatrix {
    const result: ValueMatrix = []
    baseMatrix.forEach((g) => {
      const rowToAdd: Array<Value> = []
      g.forEach((elem) => {
        if (filteredArr.find((vv) => vv.value === elem.value)) {
          rowToAdd.push(elem)
        }
      })
      if (rowToAdd.length > 0) {
        result.push(rowToAdd)
      }
    })
    return result
  }

  public static filterGroupedByArr(
    baseArr: ReadonlyArray<Value>,
    filteredArr: ReadonlyArray<Value>
  ): Array<Value> {
    const result: Array<Value> = []

    baseArr.forEach((g) => {
      // for the single element
      if (!g.options?.length) {
        if (filteredArr.find((vv) => vv.value === g.value)) {
          result.push(g)
          return
        }
      }

      // for options - if at least one element was found
      const elemToAdd: Value = {
        ...g,
        options: [],
      }
      g.options?.forEach((elem) => {
        if (filteredArr.find((vv) => vv.value === elem.value)) {
          elemToAdd.options?.push(elem)
        }
      })
      if (elemToAdd.options?.length) {
        result.push(elemToAdd)
      }
    })

    return result
  }

  public static groupedToFlatArr(
    baseArr: ReadonlyArray<Value>
  ): ReadonlyArray<Value> {
    const result: Array<Value> = []

    baseArr.forEach((elem) => {
      result.push({
        ...elem,
        options: undefined,
      })
      if (elem.options?.length) {
        result.push(...elem.options)
      }
    })

    return result
  }

  public static findValueAmongOptions(
    search: string | undefined,
    arr: ReadonlyArray<Value>
  ): Value | undefined {
    if (search === undefined) {
      return undefined
    }

    let found: Value | undefined
    arr.forEach((v) => {
      v.options?.map((elem) => {
        if (elem.value === search) {
          found = elem
        }
      })
    })

    return found
  }
}
