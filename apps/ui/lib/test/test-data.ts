import { LayoutKind, PageMeta, User, UserStatus } from '@mono-graph/core'

export function getTestPageMeta(): PageMeta {
  return {
    layoutKind: LayoutKind.Main,
    title: 'Test Page',
    description: 'Test Description',
    keywords: 'Test Keywords',
    path: '/test-path',
  }
}

export function getTestUser(): User {
  return {
    id: '111',
    firstName: 'Tester',
    lastName: 'Testerov',
    status: UserStatus.Active,
  }
}
