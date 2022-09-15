import {
  CurrentRealTime,
  HourlyEnergyProduction,
  User,
  UserStatus,
  Value,
} from '@mono-graph/core'
import TopNavigationPage from '../interfaces/top-navigation-page'

export function getTestUser(): User {
  return {
    id: '2',
    firstName: 'Tester',
    lastName: 'Testerov',
    status: UserStatus.Active,
  }
}

export function getTestTopNavPages(): Array<TopNavigationPage> {
  return [
    {
      label: 'Some page 1',
      path: '/some-1',
      isActive: true,
    },
    {
      label: 'Some page 2',
      path: '/some-2',
      isActive: false,
    },
  ]
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

export function getTestPossibleAutocomplete(): Array<Value> {
  return [
    {
      label: 'Choose ...',
      value: '',
    },
    {
      value: 'One',
    },
    {
      value: 'Two',
    },
    {
      value: 'Three',
    },
    {
      value: 'Four',
    },
    {
      value: 'Five',
    },
    {
      value: 'Six',
    },
    {
      value: 'Seven',
    },
    {
      value: 'eight',
    },
    {
      value: 'nine',
    },
  ]
}
