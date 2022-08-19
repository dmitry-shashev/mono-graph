import { render, screen } from '@testing-library/react'
import { TopNavigation } from './TopNavigation'
import { getTestTopNavPages, getTestUser } from '../../test/test-data'

describe('TopNavigation', () => {
  it('component', async () => {
    const user = getTestUser()
    const pages = getTestTopNavPages()
    render(<TopNavigation user={user} pages={pages} />)
    expect(screen.getAllByLabelText('Top Navigation')).toHaveLength(1)
  })
})
