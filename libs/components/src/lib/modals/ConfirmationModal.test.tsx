import React from 'react'
import { render } from '@testing-library/react'
import { ConfirmationModal } from './ConfirmationModal'
import { ariaLabelContainText, clickByAriaLabel } from '@mono-graph/core'

const TEST_TITLE = 'Test Title'
const TEST_DESCRIPTION = 'Test Desc'

describe('ConfirmationModal', () => {
  it('component', async () => {
    const closeModal = jest.fn()
    const onConfirm = jest.fn()

    render(<div id="modal-portal" />)
    render(
      <ConfirmationModal
        title={TEST_TITLE}
        description={TEST_DESCRIPTION}
        closeModal={closeModal}
        onConfirm={onConfirm}
        isOpened
      />
    )

    expect(ariaLabelContainText('Modal Title', TEST_TITLE))
    expect(ariaLabelContainText('Modal Description', TEST_DESCRIPTION))

    expect(closeModal).toBeCalledTimes(0)
    expect(onConfirm).toBeCalledTimes(0)
    await clickByAriaLabel('Close Confirmation Modal')
    expect(closeModal).toBeCalledTimes(1)
    expect(onConfirm).toBeCalledTimes(0)
    await clickByAriaLabel('Confirm Modal')
    expect(closeModal).toBeCalledTimes(1)
    expect(onConfirm).toBeCalledTimes(1)
  })
})
