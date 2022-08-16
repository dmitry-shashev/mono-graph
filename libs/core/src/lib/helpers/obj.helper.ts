import { cloneDeep } from 'lodash/fp'

export abstract class ObjHelper {
  public static cloneDeep<T>(obj: T): T {
    return cloneDeep(obj)
  }
}
