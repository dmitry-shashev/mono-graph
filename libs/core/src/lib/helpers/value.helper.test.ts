import { ValueHelper } from './value.helper'
import {
  getGroupedData,
  getTestGrouped,
  getTestMatrix,
  getTestSortArr,
  getTestValueArr,
} from '../tests/test-data'

describe('value.helper', () => {
  it('filterMatrixByArr', () => {
    const data = getTestMatrix()

    expect(
      ValueHelper.filterMatrixByArr(data, [
        {
          value: 'green',
        },
        {
          value: 'tree',
        },
      ])
    ).toEqual([
      [
        {
          value: 'green',
        },
      ],
      [
        {
          value: 'green',
        },
      ],
      [
        {
          value: 'tree',
        },
      ],
    ])
    expect(ValueHelper.filterMatrixByArr(data, [{ value: 'tree' }])).toEqual([
      [
        {
          value: 'tree',
        },
      ],
    ])

    expect(ValueHelper.filterMatrixByArr(data, [])).toEqual([])

    expect(data).toEqual(getTestMatrix())
  })

  it('includes', () => {
    const data = getTestValueArr()
    expect(
      ValueHelper.includes(data, {
        label: 'ratata',
        value: 'b',
      })
    ).toBe(true)
    expect(
      ValueHelper.includes(
        data,
        {
          label: 'ratata',
          value: 'b',
        },
        'label'
      )
    ).toBe(false)
    expect(ValueHelper.includes(data, undefined)).toBe(false)
  })

  it('filterGroupedByArr', async () => {
    const data = getTestGrouped()
    expect(
      ValueHelper.filterGroupedByArr(data, [
        {
          value: 'green',
        },
        {
          value: 'monday',
        },
      ])
    ).toEqual([
      {
        label: 'Color',
        options: [
          {
            value: 'green',
          },
        ],
      },
      {
        value: 'green',
      },
      {
        value: 'monday',
      },
    ])

    expect(
      ValueHelper.filterGroupedByArr(data, [
        {
          value: 'test',
        },
      ])
    ).toEqual([])
    expect(data).toEqual(getTestGrouped())
  })

  it('groupedToFlatArr', () => {
    const data = getTestGrouped()
    expect(ValueHelper.groupedToFlatArr(data)).toEqual([
      {
        label: 'Color',
      },
      {
        value: 'red',
      },
      {
        value: 'green',
      },
      {
        value: 'green',
      },
      {
        value: 'monday',
      },
      {
        label: 'Numbers',
      },
      {
        value: 'One',
      },
    ])

    expect(ValueHelper.groupedToFlatArr([])).toEqual([])

    expect(data).toEqual(getTestGrouped())
  })

  it('findValueAmongOptions', () => {
    const data = getTestGrouped()
    expect(ValueHelper.findValueAmongOptions('test', data)).toEqual(undefined)
    expect(ValueHelper.findValueAmongOptions('red', data)).toEqual({
      value: 'red',
    })
    expect(ValueHelper.findValueAmongOptions('green', data)).toEqual({
      value: 'green',
    })
    expect(ValueHelper.findValueAmongOptions(undefined, data)).toEqual(
      undefined
    )

    expect(data).toEqual(getTestGrouped())
  })

  it('buildCombinedLabel', () => {
    const data = getTestValueArr()
    expect(ValueHelper.buildCombinedLabel([])).toBe('')
    expect(ValueHelper.buildCombinedLabel(data)).toBe('a | b | c')
    expect(ValueHelper.buildCombinedLabel(data, 'label')).toBe(
      'One | Two | Three'
    )
    expect(ValueHelper.buildCombinedLabel(data, 'color')).toBe('red | green')
    expect(ValueHelper.buildCombinedLabel(data, 'color', '@')).toBe('red@green')

    expect(ValueHelper.buildCombinedLabel(data, 'type')).toBe('')

    expect(data).toEqual(getTestValueArr())
  })

  it('buildSortStringCompare', () => {
    const data = getTestSortArr()
    const compareNameFunc = ValueHelper.buildSortStringCompare('name')
    expect([...data].sort(compareNameFunc)).toEqual([
      {
        label: 'c',
        name: 'aa',
        value: 1,
      },
      {
        label: 'a',
        name: 'bb',
        value: 3,
      },
      {
        label: 'b',
        name: 'cc',
        value: 7,
      },
    ])
    const compareLabelFunc = ValueHelper.buildSortStringCompare()
    expect([...data].sort(compareLabelFunc)).toEqual([
      {
        label: 'a',
        name: 'bb',
        value: 3,
      },
      {
        label: 'b',
        name: 'cc',
        value: 7,
      },
      {
        label: 'c',
        name: 'aa',
        value: 1,
      },
    ])
  })

  it('buildSortNumberCompare', () => {
    const data = getTestSortArr()
    const compareValueFunc = ValueHelper.buildSortNumberCompare('value')
    expect([...data].sort(compareValueFunc)).toEqual([
      {
        label: 'c',
        name: 'aa',
        value: 1,
      },
      {
        label: 'a',
        name: 'bb',
        value: 3,
      },
      {
        label: 'b',
        name: 'cc',
        value: 7,
      },
    ])
  })

  it('searchParentInGroupedByPureField', () => {
    const data = getGroupedData()
    expect(ValueHelper.searchParentInGroupedByPureField('aa2', data)).toEqual(
      data[1]
    )
    expect(ValueHelper.searchParentInGroupedByPureField('aaa1', data)).toEqual(
      data[0]
    )
    expect(
      ValueHelper.searchParentInGroupedByPureField('red', data, 'color')
    ).toEqual(data[0])

    expect(ValueHelper.searchParentInGroupedByPureField('aaa1')).toEqual(
      undefined
    )
    expect(ValueHelper.searchParentInGroupedByPureField('aaa10', data)).toEqual(
      undefined
    )
    expect(
      ValueHelper.searchParentInGroupedByPureField('aaa1', data, 'type')
    ).toEqual(undefined)
  })

  it('searchChildInGroupedByPureField', () => {
    const data = getGroupedData()
    expect(ValueHelper.searchChildInGroupedByPureField('aa2', data)).toEqual(
      data[1]?.options?.[0]
    )
    expect(ValueHelper.searchChildInGroupedByPureField('aaa1', data)).toEqual(
      data[0]?.options?.[1]
    )
    expect(
      ValueHelper.searchChildInGroupedByPureField('red', data, 'color')
    ).toEqual(data[0]?.options?.[1])

    expect(ValueHelper.searchChildInGroupedByPureField('aaa1')).toEqual(
      undefined
    )
    expect(ValueHelper.searchChildInGroupedByPureField('aaa10', data)).toEqual(
      undefined
    )
    expect(
      ValueHelper.searchChildInGroupedByPureField('aaa1', data, 'type')
    ).toEqual(undefined)
  })
})
