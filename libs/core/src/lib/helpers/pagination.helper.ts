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
    const newOffset = Math.min(
      current.offset + current.limit,
      current.total - current.limit
    )
    return {
      limit: current.limit,
      total: current.total,
      offset: newOffset,
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
}
