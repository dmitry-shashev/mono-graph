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
      color: '#00c',
    },
    {
      label: 'One',
      value: 'One',
      color: '#0c0',
    },
    {
      label: 'Two',
      value: 'Two',
    },
    {
      label: 'Three',
      value: 'Three',
    },
    {
      label: 'Four',
      value: 'Four',
    },
    {
      label: 'Five',
      value: 'Five',
    },
    {
      label: 'Six',
      value: 'Six',
      color: '#0cc',
    },
    {
      label: 'Seven',
      value: 'Seven',
      color: '#00c',
    },
    {
      label: 'eight',
      value: 'eight',
      color: '#00c',
    },
    {
      label: 'nine',
      value: 'nine',
      color: '#00c',
    },
  ]
}
