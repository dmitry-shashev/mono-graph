import { StrHelper } from './str.helper'

export abstract class PageHelper {
  public static buildUrl(path: string, id?: string | number): string {
    if (!id) {
      return path
    }
    return path.replace('[id]', StrHelper.base64Encode(id))
  }
}
