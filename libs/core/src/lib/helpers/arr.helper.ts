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
}
