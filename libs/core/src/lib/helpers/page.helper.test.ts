import { PageHelper } from './page.helper'

describe('page.helper', () => {
  it('buildUrl', async () => {
    expect(PageHelper.buildUrl('/some/one', '13')).toBe('/some/one')
    expect(PageHelper.buildUrl('/some/[id]/12', '13')).toBe('/some/MTM%3D/12')
    expect(PageHelper.buildUrl('/test/[id]')).toBe('/test/[id]')
    expect(PageHelper.buildUrl('/one')).toBe('/one')
    expect(PageHelper.buildUrl('')).toBe('')
  })

  it('buildIdUrl', () => {
    expect(PageHelper.buildIdUrl('/123', 'aa')).toBe('/123?id=YWE%3D')
  })
})
