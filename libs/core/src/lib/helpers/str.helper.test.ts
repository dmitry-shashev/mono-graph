import { StrHelper } from './str.helper'
import { getTestStrArr } from '../tests/test-data'

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

  it('toHumanBytes', () => {
    expect(StrHelper.toHumanBytes(2299511627776)).toBe('2.09 TB')
    expect(StrHelper.toHumanBytes(3073741824)).toBe('2.86 GB')
    expect(StrHelper.toHumanBytes(7048576)).toBe('6.72 MB')
    expect(StrHelper.toHumanBytes(6000)).toBe('5.86 KB')
    expect(StrHelper.toHumanBytes(12, 'empty')).toBe('12 bytes')
    expect(StrHelper.toHumanBytes(1)).toBe('1 byte')
    expect(StrHelper.toHumanBytes(0)).toBe('0 bytes')
    expect(StrHelper.toHumanBytes(0, 'empty')).toBe('empty')
  })

  it('encodeURLParam', () => {
    expect(StrHelper.encodeURLParam('aa$=%')).toBe('YWEkPSU%3D')
    expect(StrHelper.encodeURLParam('')).toBe('')
  })

  it('decodeURLParam', () => {
    expect(StrHelper.decodeURLParam('YWEkPSU%3D')).toBe('aa$=%')
    expect(StrHelper.decodeURLParam('')).toBe('')
  })

  it('buildCombinedLabel', () => {
    const data = getTestStrArr()
    expect(StrHelper.buildCombinedLabel([])).toBe('')
    expect(StrHelper.buildCombinedLabel(data)).toBe('Rain / Winter / Some')
    expect(StrHelper.buildCombinedLabel(data, '|')).toBe('Rain|Winter|Some')
    expect(StrHelper.buildCombinedLabel(['a', '', 'y'])).toBe('a / y')

    expect(data).toEqual(getTestStrArr())
  })
})
