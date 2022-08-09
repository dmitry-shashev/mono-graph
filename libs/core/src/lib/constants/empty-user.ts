import { User, UserStatus } from '../_generated/apollo-types'

export const EmptyUser: Readonly<User> = {
  id: '0',
  firstName: '',
  lastName: '',
  status: UserStatus.Disabled,
}
