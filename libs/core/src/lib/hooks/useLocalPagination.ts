import { useEffect, useState } from 'react'
import { Pagination } from '../interfaces/pagination'
import { PaginationHelper } from '../helpers/pagination.helper'

interface UseLocalPaginationResult<T> {
  paginatedData?: Array<T>
  pagination: Pagination
  setPagination: (newPagination: Pagination) => void
}
export function useLocalPagination<T>(
  data?: ReadonlyArray<T>
): UseLocalPaginationResult<T> {
  const [pagination, setPagination] = useState<Pagination>({
    limit: 10,
    offset: 0,
    total: data?.length ?? 0,
  })

  useEffect(() => {
    setPagination({
      ...pagination,
      total: data?.length ?? 0,
    })
  }, [data])

  const paginatedData = PaginationHelper.applyPagination(data, pagination)

  return {
    paginatedData,
    pagination,
    setPagination,
  }
}
