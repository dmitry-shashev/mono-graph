import React from 'react'
import { render } from '@testing-library/react'
import { UserModal } from './UserModal'
import { clickByAriaLabel, typeInInputByAriaLabel } from '@mono-graph/core'
import { getTestUser } from '../../test/test-data'

describe('UserModal', () => {
  it('component', async () => {
    const testUser = getTestUser()
    const closeModal = jest.fn()
    const onSubmit = jest.fn()

    render(<div id="modal-portal" />)
    render(
      <UserModal
        closeModal={closeModal}
        onSubmit={(data) => onSubmit(data)}
        isOpened
      />
    )

    // fill the form
    await typeInInputByAriaLabel('First Name', testUser.firstName)
    await typeInInputByAriaLabel('Last Name', testUser.lastName)

    expect(onSubmit).toBeCalledTimes(0)
    await clickByAriaLabel('Submit User Modal')
    expect(onSubmit).toBeCalledTimes(1)
    expect(onSubmit).toBeCalledWith({
      firstName: testUser.firstName,
      lastName: testUser.lastName,
    })
  })
})
