import { StrHelper } from './str.helper'

export abstract class PageHelper {
  public static buildUrl(path: string, id?: string | number): string {
    if (!id) {
      return path
    }
    return path.replace('[id]', StrHelper.encodeURLParam(id))
  }

  public static buildIdUrl(url: string, id: string): string {
    const idEnc = StrHelper.encodeURLParam(id)
    return `${url}?id=${idEnc}`
  }
}
