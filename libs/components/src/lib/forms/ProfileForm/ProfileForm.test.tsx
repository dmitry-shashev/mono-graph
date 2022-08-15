import { render } from '@testing-library/react'
import { ProfileForm } from './ProfileForm'
import { getTestUser } from '../../test/test-data'
import { clickByAriaLabel, typeInInputByAriaLabel } from '@mono-graph/core'

describe('ProfileForm', () => {
  it('component', async () => {
    const onSubmit = jest.fn()
    const testUser = getTestUser()
    const newUserLastName = 'Rain'

    render(
      <ProfileForm
        defaultValues={testUser}
        onSubmit={(data) => onSubmit(data)}
      />
    )

    // update the last name
    await typeInInputByAriaLabel('Last Name', newUserLastName)

    // submit and check the form
    await clickByAriaLabel('Submit the form')
    expect(onSubmit).toBeCalledWith({
      ...testUser,
      lastName: newUserLastName,
    })
  })

  it('component with errors', async () => {
    const onSubmit = jest.fn()
    const testUser = getTestUser()

    render(
      <ProfileForm
        defaultValues={testUser}
        onSubmit={(data) => onSubmit(data)}
      />
    )

    await typeInInputByAriaLabel('Last Name', '')
    await clickByAriaLabel('Submit the form')
    expect(onSubmit).toBeCalledTimes(0)

    await typeInInputByAriaLabel('Last Name', 'Rain$')
    await clickByAriaLabel('Submit the form')
    expect(onSubmit).toBeCalledTimes(0)

    await typeInInputByAriaLabel('Last Name', 'Mike')
    await clickByAriaLabel('Submit the form')
    expect(onSubmit).toBeCalledTimes(1)
  })
})
