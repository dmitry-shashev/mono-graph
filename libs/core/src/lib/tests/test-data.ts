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
