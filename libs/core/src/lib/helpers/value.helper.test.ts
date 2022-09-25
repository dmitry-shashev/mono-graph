import { ValueHelper } from './value.helper'
import { getTestGrouped, getTestMatrix } from '../tests/test-data'

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
})
