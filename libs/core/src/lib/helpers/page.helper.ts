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

  public static buildUrlWithQuery(
    url: string,
    params: Record<string, string | number | null | undefined>
  ): string {
    const paramsFinal: Record<string, string> = {}
    for (const key in params) {
      const value = params[key]
      if (value !== undefined && value !== null) {
        paramsFinal[key] = String(value)
      }
    }
    const query = new URLSearchParams(paramsFinal)

    return `${url}?${query.toString()}`
  }
}
