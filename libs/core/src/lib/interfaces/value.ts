export interface Value {
  readonly name?: string
  readonly label?: string
  readonly value?: string | number | Array<string>
  readonly defaultSelected?: boolean
  readonly options?: Array<Value>
  readonly type?: number
}
