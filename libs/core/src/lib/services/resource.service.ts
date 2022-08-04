import { UserModel } from '../models/user.model'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

export abstract class ResourceService {
  private static readonly apolloClient = new ApolloClient({
    uri: 'http://localhost:3333/graphql',
    cache: new InMemoryCache(),
  })

  public static async getUser(): Promise<UserModel> {
    const result = await ResourceService.apolloClient.query({
      query: gql`
        query {
          getUser {
            id
            firstName
            lastName
          }
        }
      `,
    })
    const user = await result.data.getUser
    return {
      id: Number(user.id),
      firstName: String(user.firstName),
      lastName: String(user.lastName),
    }
  }

  public static async updateUser(newUser: UserModel): Promise<boolean> {
    await new Promise((r) => setTimeout(r, 2000))
    const result = await ResourceService.apolloClient.mutate({
      mutation: gql`
        mutation ($input: UserInput) {
          updateUser(input: $input) {
            id
            firstName
            lastName
          }
        }
      `,
      variables: {
        input: newUser,
      },
    })

    const user = await result.data.updateUser
    return !!user.id
  }
}
