import {
  CurrentRealTime,
  HourlyEnergyProduction,
  User,
  UserStatus,
} from '@mono-graph/core'

export function getTestUser(): User {
  return {
    id: '2',
    firstName: 'Tester',
    lastName: 'Testerov',
    status: UserStatus.Active,
  }
}

export function getTestHourlyEnergyProduction(): Array<HourlyEnergyProduction> {
  return [
    {
      hour: 1,
      value: 12,
    },
    {
      hour: 4,
      value: 4,
    },
    {
      hour: 5,
      value: 21,
    },
    {
      hour: 23,
      value: 2,
    },
  ]
}

export function getTestCurrentRealTime(): CurrentRealTime {
  return {
    charged: 12,
    discharged: 24,
    export: 33,
    import: 13,
    production: 45,
    consumption: 17,
  }
}
