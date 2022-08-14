import * as express from 'express'
import { graphqlHTTP } from 'express-graphql'
import * as cors from 'cors'
import * as fs from 'fs'
import { buildSchema } from 'graphql'
import {
  CurrentRealTime,
  HourlyEnergyProduction,
  User,
  UserStatus,
} from '@mono-graph/core'

function round(num: number, signs = 2): number {
  return Number(num.toFixed(signs))
}

// emulating DB
const user: User = {
  id: '12',
  firstName: 'Rick',
  lastName: 'Sanchez',
  status: UserStatus.Active,
}
const dailyEnergyProduction: Array<HourlyEnergyProduction> = []
for (let i = 1; i < 15; ++i) {
  dailyEnergyProduction.push({
    hour: i,
    value: 101 * Math.random(),
  })
}

const SCHEMA = fs.readFileSync(
  './libs/core/src/lib/graph/schema.graphql',
  'utf-8'
)

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
    schema: buildSchema(SCHEMA),
    rootValue: {
      getUser: (): User => user,
      updateUser: ({ input }: { input: User }) => {
        // pretend that we can not change other users
        if (input.id === user.id) {
          user.firstName = input.firstName
          user.lastName = input.lastName
          return user
        }
        return {
          id: 0,
          firstName: '',
          lastName: '',
          status: UserStatus.Disabled,
        }
      },
      getCurrentRealTime: async (): Promise<CurrentRealTime> => {
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
      getDailyEnergyProduction: (): Array<HourlyEnergyProduction> =>
        dailyEnergyProduction,
    },
  })
)

const server = app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/graphql`)
})

server.on('error', console.error)
