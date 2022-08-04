import { gql } from '@apollo/client'

export const DAILY_ENERGY_PRODUCTION_QUERY = gql`
  query {
    getDailyEnergyProduction {
      hour
      value
    }
  }
`
