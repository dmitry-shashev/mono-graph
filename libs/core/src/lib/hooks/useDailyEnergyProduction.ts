import { HourlyEnergyProductionModel } from '../models/hourly-energy-production.model'
import { useQuery } from '@apollo/client'
import { DAILY_ENERGY_PRODUCTION_QUERY } from '../constants/queries/daily-energy-production.query'

export function useDailyEnergyProduction(): {
  loading: boolean
  errorMessage: string
  data: Array<HourlyEnergyProductionModel> | undefined
} {
  const { loading, error, data } = useQuery(DAILY_ENERGY_PRODUCTION_QUERY)

  return {
    loading,
    errorMessage: error?.message ?? '',
    data: data?.getDailyEnergyProduction,
  }
}
