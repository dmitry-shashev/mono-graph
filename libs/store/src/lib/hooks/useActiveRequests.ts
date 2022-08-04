import { getStartedRequests } from '../reducers/requestSlice'
import { useSelector } from 'react-redux'

export function useActiveRequests(requests: Array<string>): boolean {
  const startedRequests = useSelector(getStartedRequests)(requests)
  return startedRequests.length > 0
}
