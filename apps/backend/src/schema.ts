import { buildSchema } from 'graphql'

const SCHEMA = buildSchema(`
  type HourlyEnergyProduction {
    hour: Int
    value: Float
  }

  type CurrentRealTime {
    production: Float
    consumption: Float
    import: Float
    export: Float
    charged: Float
    discharged: Float
  }

  type User {
    id: ID
    firstName: String
    lastName: String
  }

  input UserInput {
    id: ID
    firstName: String!
    lastName: String!
  }

  type Query {
    getUser: User
    getCurrentRealTime: CurrentRealTime
    getDailyEnergyProduction: [HourlyEnergyProduction]
  }

  type Mutation {
    updateUser(input: UserInput): User
  }
`)

export default SCHEMA
