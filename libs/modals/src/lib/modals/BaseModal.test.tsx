import React from 'react'
import { render } from '@testing-library/react'
import BaseModal from './BaseModal'
import { clickByAriaLabel } from '@mono-graph/core'

describe('BaseModal', () => {
  it('component', async () => {
    const closeModal = jest.fn()
    render(<div id="modal-portal" />)
    render(
      <BaseModal closeModal={closeModal} isOpened>
        <div aria-label="jsContent" />
      </BaseModal>
    )

    expect(closeModal).toBeCalledTimes(0)

    await clickByAriaLabel('Close Modal')
    expect(closeModal).toBeCalledTimes(1)
    await clickByAriaLabel('Modal Background')
    expect(closeModal).toBeCalledTimes(2)
  })
})
