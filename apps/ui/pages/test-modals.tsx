import React, { useState } from 'react'
import { LayoutKind, ModalType, Page, User } from '@mono-graph/core'
import PagePath from '../lib/constants/page-path'
import { useModal } from '@mono-graph/store'
import { ConfirmationModal, InfoModal, UserModal } from '@mono-graph/components'

const TestModalsPage: Page = () => {
  const [newUser, setNewUser] = useState<User | null>(null)
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false)

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
  } = useModal(ModalType.User)

  return (
    <div>
      <div>
        <button
          onClick={openInfoModal}
          type="button"
          aria-label="Open Info Modal"
        >
          Open Info Modal
        </button>
      </div>
      <br />
      <div>
        <button
          onClick={openConfirmationModal}
          type="button"
          aria-label="Open Confirmation Modal"
        >
          Open Confirmation Modal
        </button>
        {isConfirmed && <div aria-label="Is Confirmed">Confirmed</div>}
      </div>
      <br />
      <div>
        <button
          onClick={openUserModal}
          type="button"
          aria-label="Open User Modal"
        >
          Open Edit User Modal
        </button>
        {newUser && (
          <div aria-label="New User">
            {newUser.firstName} {newUser.lastName}
          </div>
        )}
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
        onConfirm={() => {
          setIsConfirmed(true)
          closeConfirmationModal()
        }}
      />

      <UserModal
        isOpened={isUserModalOpened}
        closeModal={closeUserModal}
        onSubmit={(newUser) => {
          setNewUser(newUser)
          closeUserModal()
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
