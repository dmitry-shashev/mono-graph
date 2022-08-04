import * as express from 'express'
import { graphqlHTTP } from 'express-graphql'
import SCHEMA from './schema'
import {
  CurrentRealTimeModel,
  HourlyEnergyProductionModel,
  UserModel,
} from '@mono-graph/core'
import * as cors from 'cors'

function round(num: number, signs = 2): number {
  return Number(num.toFixed(signs))
}

// emulating DB
const user: UserModel = {
  id: 12,
  firstName: 'Rick',
  lastName: 'Sanchez',
}
const dailyEnergyProduction: Array<HourlyEnergyProductionModel> = []
for (let i = 1; i < 15; ++i) {
  dailyEnergyProduction.push({
    hour: i,
    value: 100 * Math.random(),
  })
}

const PORT = process.env.port || 3333

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([])
})

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: SCHEMA,
    rootValue: {
      getUser: (): UserModel => user,
      updateUser: ({ input }: { input: UserModel }) => {
        // pretend that we can not change other users
        if (Number(input.id) === user.id) {
          user.firstName = input.firstName
          user.lastName = input.lastName
          return user
        }
        return {
          id: 0,
          firstName: '',
          lastName: '',
        }
      },
      getCurrentRealTime: async (): Promise<CurrentRealTimeModel> => {
        // slow down for demo purposes
        await new Promise((r) => setTimeout(r, 1000))
        // some random data
        const factor = Math.random()
        return {
          production: round(12 * factor),
          consumption: round(34 * factor),
          import: round(108 * factor),
          export: round(37 * factor),
          charged: round(6 * factor),
          discharged: round(150 * factor),
        }
      },
      getDailyEnergyProduction: (): Array<HourlyEnergyProductionModel> =>
        dailyEnergyProduction,
    },
  })
)

const server = app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/graphql`)
})

server.on('error', console.error)
