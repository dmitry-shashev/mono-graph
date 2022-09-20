import { StrHelper } from './str.helper'

describe('str.helper', () => {
  it('base64Encode', () => {
    expect(StrHelper.base64Encode('some')).toBe('c29tZQ==')
    expect(StrHelper.base64Encode('')).toBe('')
  })

  it('base64Decode', () => {
    expect(StrHelper.base64Decode('c29tZQ==')).toBe('some')
    expect(StrHelper.base64Decode('')).toBe('')
  })

  it('formatMoney', () => {
    expect(StrHelper.formatMoney(34)).toBe('$34.00')
    expect(StrHelper.formatMoney(12000.4111)).toBe('$12,000.41')
    expect(StrHelper.formatMoney(0)).toBe('$0.00')
  })

  it('isSubstring', () => {
    expect(StrHelper.isSubstring('wet Rain', 'rAin')).toBe(true)
    expect(StrHelper.isSubstring('wet Rain', 'ru')).toBe(false)
    expect(StrHelper.isSubstring('', 'ru')).toBe(false)
    expect(StrHelper.isSubstring('', '')).toBe(true)
    expect(StrHelper.isSubstring('1213', '')).toBe(true)
  })

  it('isSubstringInObj', () => {
    const getData = (): { name: string; color: string } => ({
      name: 'tester',
      color: 'Red',
    })
    const data = getData()
    expect(StrHelper.isSubstringInObj(data, ['name'], 'te')).toBe(true)
    expect(StrHelper.isSubstringInObj(data, ['name'], 'Re')).toBe(false)
    expect(StrHelper.isSubstringInObj(data, ['color'], 'Re')).toBe(true)
    expect(StrHelper.isSubstringInObj(data, ['color', 'name'], 'e')).toBe(true)
    expect(StrHelper.isSubstringInObj(data, ['color', 'name'], 'te')).toBe(true)
    expect(StrHelper.isSubstringInObj(data, ['color', 'name'], 'ed')).toBe(true)
    expect(StrHelper.isSubstringInObj(data, ['color', 'name'], 'm')).toBe(false)
  })

  it('buildOddEvenFunc', () => {
    const func = StrHelper.buildOddEvenFunc()
    expect(func()).toBe('formRowOdd')
    expect(func()).toBe('formRowEven')
    expect(func()).toBe('formRowOdd')
    expect(func(true)).toBe(undefined)
    expect(func(true)).toBe(undefined)
    expect(func()).toBe('formRowEven')
  })
})
