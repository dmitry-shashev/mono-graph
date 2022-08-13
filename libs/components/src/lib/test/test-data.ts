import { User, UserStatus } from '@mono-graph/core'

export function getTestUser(): User {
  return {
    id: '2',
    firstName: 'Tester',
    lastName: 'Testerov',
    status: UserStatus.Active,
  }
}
