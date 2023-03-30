import { Pagination } from '../interfaces/pagination'

export abstract class PaginationHelper {
  public static firstPage(current: Pagination): Pagination {
    return {
      limit: current.limit,
      total: current.total,
      offset: 0,
    }
  }

  public static lastPage(current: Pagination): Pagination {
    return {
      limit: current.limit,
      total: current.total,
      offset: Math.max(current.total - current.limit, 0),
    }
  }

  public static nextPage(current: Pagination): Pagination {
    return {
      limit: current.limit,
      total: current.total,
      offset: Math.min(current.offset + current.limit, current.total),
    }
  }

  public static prevPage(current: Pagination): Pagination {
    const newOffset = Math.max(current.offset - current.limit, 0)
    return {
      limit: current.limit,
      total: current.total,
      offset: newOffset,
    }
  }

  public static applyPagination<T>(
    data?: ReadonlyArray<T>,
    pagination?: Pagination
  ): Array<T> | undefined {
    if (!pagination) {
      return data?.concat([])
    }
    return data?.slice(pagination.offset, pagination.offset + pagination.limit)
  }

  public static isPaginationForbidden(pagination?: Pagination): boolean {
    if (!pagination) {
      return true
    }
    return pagination.total <= pagination.limit
  }

  public static getPaginationCurrentPage(pagination: Pagination): number {
    return Math.ceil(pagination.offset / (pagination.limit ?? 1) + 1)
  }

  public static getPaginationTotalPages(pagination: Pagination): number {
    return Math.ceil(pagination.total / (pagination.limit ?? 1))
  }

  public static isFirstPage(pagination: Pagination): boolean {
    return pagination.offset === 0
  }

  public static isLastPage(pagination: Pagination): boolean {
    return pagination.offset + pagination.limit === pagination.total
  }
}
