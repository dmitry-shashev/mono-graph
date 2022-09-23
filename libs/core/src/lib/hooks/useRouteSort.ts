import { useRouter } from 'next/router'
import { Sort } from '../constants/sort'
import { TypeHelper } from '../helpers/type.helper'

interface UseRouteSortResult {
  sort: Sort
  onSort: (value: Sort) => void
}

export function useRouteSort(): UseRouteSortResult {
  const router = useRouter()

  const sort = TypeHelper.parseSortFromQuery(router.query['sort'])
  const onSort = (newSort: Sort): void => {
    router.push({
      query: {
        ...router.query,
        sort: newSort,
      },
    })
  }

  return {
    sort,
    onSort,
  }
}
