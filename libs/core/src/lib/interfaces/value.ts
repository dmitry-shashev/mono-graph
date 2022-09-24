export interface Value {
  readonly name?: string
  readonly label?: string
  readonly value?: string | number | Array<string>
  readonly defaultSelected?: boolean
  readonly options?: Array<Value>
  readonly type?: number
  readonly color?: string
  readonly required?: boolean
}

export type ValueMatrix = Array<Array<Value>>
export type ValueMatrixReadOnly = ReadonlyArray<ReadonlyArray<Value>>
