import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from '@apollo/client'
import { User } from '../_generated/apollo-types'
import { fetch } from 'cross-fetch'

export abstract class ResourceService {
  private static readonly apolloClient = new ApolloClient({
    link: createHttpLink({
      uri: 'http://localhost:3333/graphql',
      fetch,
    }),
    cache: new InMemoryCache(),
  })

  public static async getUser(): Promise<User> {
    const result = await ResourceService.apolloClient.query({
      query: gql`
        query {
          getUser {
            id
            firstName
            lastName
            status
          }
        }
      `,
    })
    return result.data.getUser
  }

  public static async updateUser(newUser: User): Promise<boolean> {
    await new Promise((r) => setTimeout(r, 2000))
    const result = await ResourceService.apolloClient.mutate({
      mutation: gql`
        mutation ($input: UserInput!) {
          updateUser(input: $input) {
            id
            firstName
            lastName
          }
        }
      `,
      variables: {
        input: {
          id: newUser.id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
        },
      },
    })

    const user = await result.data.updateUser
    return !!user.id
  }
}
