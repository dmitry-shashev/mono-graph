import { useQuery } from '@apollo/client'
import { CURRENT_REAL_TIME_QUERY } from '../constants/queries/current-real-time.query'
import { CurrentRealTimeModel } from '../models/current-real-time.model'

export function useCurrentRealTime(): {
  loading: boolean
  errorMessage: string
  data: CurrentRealTimeModel | undefined
} {
  const { loading, error, data } = useQuery(CURRENT_REAL_TIME_QUERY, {
    pollInterval: 5000,
  })

  return {
    loading,
    errorMessage: error?.message ?? '',
    data: data?.getCurrentRealTime,
  }
}
