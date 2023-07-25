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

  public static includes(
    arr: ReadonlyArray<Value>,
    elem?: Value,
    field: keyof Value = 'value'
  ): boolean {
    if (!elem) {
      return false
    }
    return arr.map((v) => String(v[field])).includes(String(elem[field]))
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

  public static buildCompositeLabel(
    arr: ReadonlyArray<Value | undefined>,
    field: keyof Value = 'label',
    delimiter = ', '
  ): string {
    const result: Array<string> = arr
      .map((v) => String(v?.[field] ?? '').trim())
      .filter((v) => !!v)

    return result.join(delimiter)
  }

  public static buildSortStringCompare(
    fieldName: keyof Value = 'label'
  ): (a: Value, b: Value) => number {
    return (a, b) => {
      const ah = String(a[fieldName]).toLowerCase()
      const bh = String(b[fieldName]).toLowerCase()
      return ah.localeCompare(bh)
    }
  }

  public static sortBy(
    arr: Array<Value>,
    key: keyof Value = 'label'
  ): Array<Value> {
    const result = [...arr]
    result.sort((a, b) =>
      String(a[key] ?? '').localeCompare(String(b[key] ?? ''))
    )
    return result
  }

  public static buildSortNumberCompare(
    fieldName: keyof Value = 'label'
  ): (a: Value, b: Value) => number {
    return (a, b) => {
      const ah = Number(a[fieldName])
      const bh = Number(b[fieldName])
      return ah - bh
    }
  }

  public static searchParentInGroupedByPureField(
    valueToFind: unknown,
    data?: ReadonlyArray<Value>,
    fieldName: keyof Value = 'value'
  ): Value | undefined {
    if (!data) {
      return undefined
    }
    let found: Value | undefined
    data.forEach((elem) => {
      if (found) {
        return
      }
      if (elem.options?.find((v) => v[fieldName] === valueToFind)) {
        found = elem
      }
    })
    return found
  }

  public static searchChildInGroupedByPureField(
    valueToFind: unknown,
    data?: ReadonlyArray<Value>,
    fieldName: keyof Value = 'value'
  ): Value | undefined {
    if (!data) {
      return undefined
    }
    let found: Value | undefined
    data.forEach((elem) => {
      if (found) {
        return
      }
      found = elem.options?.find((v) => v[fieldName] === valueToFind)
    })
    return found
  }

  public static labelSelector(v: Value): string {
    return v.label ?? ''
  }

  public static sum(
    arr: ReadonlyArray<Value>,
    field: keyof Value = 'value'
  ): number {
    let result = 0
    arr.forEach((v) => {
      const valueToAdd = Number(v[field])
      if (!isNaN(valueToAdd)) {
        result += valueToAdd
      }
    })
    return result
  }

  public static isValidDate(value: string): boolean {
    const parsed = Date.parse(value)
    return !isNaN(parsed)
  }
}
