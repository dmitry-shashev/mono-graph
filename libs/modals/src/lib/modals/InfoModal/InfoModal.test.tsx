import React from 'react'
import { render } from '@testing-library/react'
import { InfoModal } from './InfoModal'
import { ariaLabelContainText, clickByAriaLabel } from '@mono-graph/core'

const TEST_TITLE = 'Test Title'
const TEST_DESCRIPTION = 'Test Desc'

describe('InfoModal', () => {
  it('component', async () => {
    const closeModal = jest.fn()

    render(<div id="modal-portal" />)
    render(
      <InfoModal
        title={TEST_TITLE}
        description={TEST_DESCRIPTION}
        closeModal={closeModal}
        isOpened
      />
    )

    expect(ariaLabelContainText('Modal Title', TEST_TITLE))
    expect(ariaLabelContainText('Modal Description', TEST_DESCRIPTION))

    expect(closeModal).toBeCalledTimes(0)
    await clickByAriaLabel('Close Info Modal')
    expect(closeModal).toBeCalledTimes(1)
  })
})
