import { render } from '@testing-library/react'
import { TopNavigation } from './TopNavigation'
import { screen } from '@testing-library/react'

describe('TopNavigation', () => {
  it('component', async () => {
    render(
      <TopNavigation
        user={{
          id: 12,
          firstName: 'F1',
          lastName: 'L1',
        }}
        pages={[]}
      />
    )
    expect(screen.getAllByLabelText('Top Navigation')).toHaveLength(1)
  })
})
