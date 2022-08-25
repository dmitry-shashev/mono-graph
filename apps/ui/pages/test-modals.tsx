import React from 'react'
import { LayoutKind, ModalType, Page } from '@mono-graph/core'
import PagePath from '../lib/constants/page-path'
import { useModal } from '@mono-graph/store'
import { InfoModal } from '@mono-graph/components'

const TestModalsPage: Page = () => {
  const {
    openModal: openInfoModal,
    closeModal: closeInfoModal,
    isModalOpened: isInfoModalOpened,
  } = useModal(ModalType.Info)

  return (
    <div>
      <div>
        <button onClick={() => openInfoModal()} type="button">
          Open Info Modal
        </button>
      </div>
      <br />
      <div>
        <button type="button">Open Confirmation Modal</button>
      </div>
      <br />
      <div>
        <button type="button">Open Edit User Modal</button>
      </div>

      <div>1</div>
      <InfoModal isOpened={isInfoModalOpened} closeModal={closeInfoModal} />
      <div>2</div>
    </div>
  )
}

TestModalsPage.pageMeta = {
  title: 'Test Modals',
  description: 'Test Modals',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.TestModals,
}

export default TestModalsPage
