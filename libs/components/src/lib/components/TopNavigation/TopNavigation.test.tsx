import { render, screen } from '@testing-library/react'
import { TopNavigation } from './TopNavigation'
import { UserStatus } from '@mono-graph/core'

describe('TopNavigation', () => {
  it('component', async () => {
    render(
      <TopNavigation
        user={{
          id: '12',
          firstName: 'F1',
          lastName: 'L1',
          status: UserStatus.Active,
        }}
        pages={[]}
      />
    )
    expect(screen.getAllByLabelText('Top Navigation')).toHaveLength(1)
  })
})
