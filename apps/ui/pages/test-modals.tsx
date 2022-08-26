import React from 'react'
import { LayoutKind, ModalType, Page } from '@mono-graph/core'
import PagePath from '../lib/constants/page-path'
import { useModal } from '@mono-graph/store'
import { ConfirmationModal, InfoModal, UserModal } from '@mono-graph/components'

const TestModalsPage: Page = () => {
  const {
    openModal: openInfoModal,
    closeModal: closeInfoModal,
    isModalOpened: isInfoModalOpened,
  } = useModal(ModalType.Info)

  const {
    openModal: openConfirmationModal,
    closeModal: closeConfirmationModal,
    isModalOpened: isConfirmationModalOpened,
  } = useModal(ModalType.Confirmation)

  const {
    openModal: openUserModal,
    closeModal: closeUserModal,
    isModalOpened: isUserModalOpened,
  } = useModal(ModalType.Confirmation)

  return (
    <div>
      <div>
        <button onClick={openInfoModal} type="button">
          Open Info Modal
        </button>
      </div>
      <br />
      <div>
        <button onClick={openConfirmationModal} type="button">
          Open Confirmation Modal
        </button>
      </div>
      <br />
      <div>
        <button onClick={openUserModal} type="button">
          Open Edit User Modal
        </button>
      </div>

      <InfoModal
        title="Test Info Title"
        description="Some very important description"
        isOpened={isInfoModalOpened}
        closeModal={closeInfoModal}
      />

      <ConfirmationModal
        title="Confirm the action"
        description="You are going to do something important"
        isOpened={isConfirmationModalOpened}
        closeModal={closeConfirmationModal}
        onConfirm={() => null}
      />

      <UserModal
        isOpened={isUserModalOpened}
        closeModal={closeUserModal}
        onSubmit={(newUser) => {
          // @#$
          // eslint-disable-next-line no-console
          console.log({ newUser })
        }}
      />
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
