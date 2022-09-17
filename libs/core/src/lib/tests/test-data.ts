import { Pagination } from '../interfaces/pagination'

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
