import { Pagination } from '../interfaces/pagination'
import { Value, ValueMatrix } from '../interfaces/value'

export function getTestAveragePagination(): Pagination {
  return {
    limit: 10,
    offset: 30,
    total: 100,
  }
}

export function getTestStartPagination(): Pagination {
  return {
    limit: 10,
    offset: 0,
    total: 100,
  }
}

export function getTestEndPagination(): Pagination {
  return {
    limit: 10,
    offset: 90,
    total: 100,
  }
}

export function getTestGrouped(): Array<Value> {
  return [
    {
      label: 'Color',
      options: [
        {
          value: 'red',
        },
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
    {
      label: 'Numbers',
      options: [{ value: 'One' }],
    },
  ]
}

export function getTestMatrix(): ValueMatrix {
  return [
    [
      {
        value: 'red',
      },
      {
        value: 'green',
      },
      {
        value: 'blue',
      },
    ],
    [
      {
        value: 'monday',
      },
      {
        value: 'green',
      },
    ],
    [
      {
        value: 'tree',
      },
    ],
  ]
}

export function getTestValueArr(): Array<Value> {
  return [
    {
      label: 'One',
      value: 'a',
      color: 'red',
    },
    {
      label: 'Two',
      value: 'b',
    },
    {
      label: 'Three',
      value: 'c',
      color: 'green',
    },
  ]
}

export function getTestStrArr(): Array<string> {
  return ['Rain', 'Winter', 'Some']
}

export function getTestSortArr(): Array<Value> {
  return [
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
  ]
}
