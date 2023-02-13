import { UrlHelper } from './url.helper'

describe('url.helper', () => {
  it('parseCurrentUrlParams', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete global.window.location
    global.window = Object.create(window)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.window.location = {
      port: '8080',
      protocol: 'https:',
      hostname: 'localhost',
      search: '?t=123&f=33',
      origin: 'https://localhost:8080',
    }

    expect(UrlHelper.parseCurrentUrlParams().toString()).toBe('t=123&f=33')
  })

  it('normalizeUrl', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete global.window.location
    global.window = Object.create(window)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.window.location = {
      port: '8080',
      protocol: 'https:',
      hostname: 'localhost',
      search: '?t=123&f=33',
      origin: 'https://localhost:8080',
    }

    expect(UrlHelper.normalizeUrl('login')).toBe('https://localhost:8080/login')
    expect(UrlHelper.normalizeUrl('http://tt.tt')).toBe('http://tt.tt')
  })

  it('proxyParams', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete global.window.location
    global.window = Object.create(window)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.window.location = {
      port: '8080',
      protocol: 'https:',
      hostname: 'localhost',
      search: '?t=123&f=33',
      origin: 'https://localhost:8080',
    }

    expect(UrlHelper.proxyParams(['tp', 'f'], 'login', 'http://tt.tt')).toBe(
      'http://tt.tt/login?f=33'
    )
    expect(UrlHelper.proxyParams(['tp', 'f'], 'login')).toBe(
      'https://localhost:8080/login?f=33'
    )
  })

  it('currentLinkWithoutDomain', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete global.window.location
    global.window = Object.create(window)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.window.location = {
      port: '8080',
      protocol: 'https:',
      hostname: 'localhost',
      search: '?t=123&f=33',
      origin: 'https://localhost:8080',
      href: 'https://localhost:8080/login?t=123&f=33',
    }

    expect(UrlHelper.currentLinkWithoutDomain()).toBe('/login?t=123&f=33')
  })
})
