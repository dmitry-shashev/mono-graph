import { gql } from '@apollo/client'

export const CURRENT_REAL_TIME_QUERY = gql`
  query {
    getCurrentRealTime {
      production
      consumption
      import
      export
      charged
      discharged
    }
  }
`
