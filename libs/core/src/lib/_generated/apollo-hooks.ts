import * as Types from './apollo-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const CurrentRealTimeDocument = gql`
    query CurrentRealTime {
  getCurrentRealTime {
    production
    consumption
    import
    export
    charged
    discharged
  }
}
    `;

/**
 * __useCurrentRealTimeQuery__
 *
 * To run a query within a React component, call `useCurrentRealTimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentRealTimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentRealTimeQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentRealTimeQuery(baseOptions?: Apollo.QueryHookOptions<Types.CurrentRealTimeQuery, Types.CurrentRealTimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.CurrentRealTimeQuery, Types.CurrentRealTimeQueryVariables>(CurrentRealTimeDocument, options);
      }
export function useCurrentRealTimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.CurrentRealTimeQuery, Types.CurrentRealTimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.CurrentRealTimeQuery, Types.CurrentRealTimeQueryVariables>(CurrentRealTimeDocument, options);
        }
export type CurrentRealTimeQueryHookResult = ReturnType<typeof useCurrentRealTimeQuery>;
export type CurrentRealTimeLazyQueryHookResult = ReturnType<typeof useCurrentRealTimeLazyQuery>;
export type CurrentRealTimeQueryResult = Apollo.QueryResult<Types.CurrentRealTimeQuery, Types.CurrentRealTimeQueryVariables>;
export const DailyEnergyProductionDocument = gql`
    query DailyEnergyProduction {
  getDailyEnergyProduction {
    hour
    value
  }
}
    `;

/**
 * __useDailyEnergyProductionQuery__
 *
 * To run a query within a React component, call `useDailyEnergyProductionQuery` and pass it any options that fit your needs.
 * When your component renders, `useDailyEnergyProductionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDailyEnergyProductionQuery({
 *   variables: {
 *   },
 * });
 */
export function useDailyEnergyProductionQuery(baseOptions?: Apollo.QueryHookOptions<Types.DailyEnergyProductionQuery, Types.DailyEnergyProductionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.DailyEnergyProductionQuery, Types.DailyEnergyProductionQueryVariables>(DailyEnergyProductionDocument, options);
      }
export function useDailyEnergyProductionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.DailyEnergyProductionQuery, Types.DailyEnergyProductionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.DailyEnergyProductionQuery, Types.DailyEnergyProductionQueryVariables>(DailyEnergyProductionDocument, options);
        }
export type DailyEnergyProductionQueryHookResult = ReturnType<typeof useDailyEnergyProductionQuery>;
export type DailyEnergyProductionLazyQueryHookResult = ReturnType<typeof useDailyEnergyProductionLazyQuery>;
export type DailyEnergyProductionQueryResult = Apollo.QueryResult<Types.DailyEnergyProductionQuery, Types.DailyEnergyProductionQueryVariables>;