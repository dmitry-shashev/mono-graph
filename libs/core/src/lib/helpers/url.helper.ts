export abstract class UrlHelper {
  public static parseCurrentUrlParams(): URLSearchParams {
    return new URLSearchParams(window.location.search)
  }

  public static normalizeUrl(url: string, baseUrl?: string): string {
    if (/http/i.test(url)) {
      return url
    }
    const urlBase = `${(baseUrl ?? window.location.origin).replace(/\/$/, '')}/`
    const urlParsed = new URL(url, urlBase)
    return urlParsed.toString()
  }

  public static proxyParams(
    proxyParamNames: ReadonlyArray<string>,
    url: string,
    baseUrl?: string
  ): string {
    const currentParams = UrlHelper.parseCurrentUrlParams()
    const urlNormalized = UrlHelper.normalizeUrl(url, baseUrl)

    const urlParsed = new URL(urlNormalized)
    proxyParamNames.forEach((paramName) => {
      const value = currentParams.get(paramName)
      if (value !== undefined && value !== null) {
        urlParsed.searchParams.set(paramName, value)
      }
    })

    return urlParsed.toString()
  }
}
