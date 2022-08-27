import { FC } from 'react'
import { render } from '@testing-library/react'
import { createAppStore } from '../store'
import {
  ariaLabelInTheDocument,
  ariaLabelNotInTheDocument,
  clickByAriaLabel,
  ModalType,
} from '@mono-graph/core'
import { Provider } from 'react-redux'
import { useModal } from './useModal'

const MODAL_ARIA = 'jsModal'

const Test: FC = () => {
  const { openModal, closeModal, isModalOpened } = useModal(ModalType.Info)

  return (
    <div>
      <button aria-label="jsOpen" onClick={openModal} />
      <button aria-label="jsClose" onClick={closeModal} />
      {isModalOpened && <div aria-label={MODAL_ARIA} />}
    </div>
  )
}

describe('useModal', () => {
  it('hook', async () => {
    const store = createAppStore()
    render(
      <Provider store={store}>
        <Test />
      </Provider>
    )

    expect(ariaLabelNotInTheDocument(MODAL_ARIA))
    await clickByAriaLabel('jsOpen')
    expect(ariaLabelInTheDocument(MODAL_ARIA))
    await clickByAriaLabel('jsClose')
    expect(ariaLabelNotInTheDocument(MODAL_ARIA))
  })
})
