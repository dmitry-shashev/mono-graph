import { LayoutKind, PageMeta, User, UserStatus, Value } from '@mono-graph/core'

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

export function getTestAutocompleteVariants(): Array<Value> {
  return [
    {
      label: 'Choose ...',
    },
    {
      label: 'Red',
      value: '1',
    },
    {
      label: 'Green',
      value: '2',
    },
    {
      label: 'Blue',
      value: '3',
    },
    {
      label: 'Purple',
      value: '4',
    },
    {
      label: 'White',
      value: '5',
    },
    {
      label: 'Yellow',
      value: '6',
    },
    {
      label: 'Grey',
      value: '7',
    },
  ]
}
