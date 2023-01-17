export abstract class WindowHelper {
  public static getWidth(): number {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    )
  }

  public static getHeight(): number {
    return (
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    )
  }

  public static isElementInViewport(el: Element): boolean {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  public static openInNewTab(link: string): void {
    if (!globalThis) {
      return
    }
    const a = document.createElement('a')
    a.setAttribute('href', link)
    a.setAttribute('target', '_blank')
    a.click()
  }

  public static copyToClipboard(str: string): Promise<void> {
    return navigator.clipboard.writeText(str)
  }

  public static pureNavigate(url: string): void {
    if (!globalThis || !globalThis.location) {
      return
    }

    // normalize url
    const urlValue = url.replace(/^\//, '')
    let origin = ''

    if (!url.match(/^http/)) {
      origin = `${globalThis.location.origin}/`
    }

    globalThis.location.href = `${origin}${urlValue}`
  }

  public static clearAllCookie(): void {
    document.cookie.split(';').forEach((c) => {
      document.cookie =
        c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;'
    })
  }
}
