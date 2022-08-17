import { User, UserStatus } from '@mono-graph/core'

export function getTestUser(): User {
  return {
    id: '99',
    firstName: 'Mike',
    lastName: 'Green',
    status: UserStatus.Active,
  }
}
