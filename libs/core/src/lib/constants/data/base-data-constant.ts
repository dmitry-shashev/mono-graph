type ConstantsOnlyType<ConstantType, ElementType> = Pick<
  ConstantType,
  {
    [K in keyof ConstantType]: ConstantType[K] extends ElementType ? K : never
  }[keyof ConstantType]
>

abstract class BaseDataConstant<T, P> {
  abstract readonly UNDEFINED: T

  public abstract getAll(): ReadonlyArray<T>

  public getByKey(key: keyof ConstantsOnlyType<P, T>): T {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = this[key] as unknown
    if (!result) {
      return this.UNDEFINED
    }
    return result as T
  }

  public getByFieldValue<Key extends keyof T, Value extends T[Key]>(
    fieldName: Key,
    fieldValue: Value
  ): T {
    const allConstants = this.getAll()
    const found = allConstants.find((v) => v[fieldName] === fieldValue)
    if (!found) {
      return this.UNDEFINED
    }
    return found
  }
}

export default BaseDataConstant
