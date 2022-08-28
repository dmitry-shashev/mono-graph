import React, { FC } from 'react'
import BaseModal from './BaseModal'
import { Button } from '@mui/material'
import { User } from '@mono-graph/core'
import { ProfileForm } from '../forms/ProfileForm/ProfileForm'

interface Props {
  closeModal: () => void
  isOpened: boolean
  onSubmit: (formData: User) => void
}

export const UserModal: FC<Props> = ({ closeModal, isOpened, onSubmit }) => {
  return (
    <BaseModal isOpened={isOpened} closeModal={closeModal}>
      <div className="modalWindow" aria-label="User Modal">
        <div className="modalHeader">Add a new user</div>
        <div className="modalContent">
          <ProfileForm onSubmit={onSubmit} loading={false} hideControls />
        </div>

        <div className="modalFooter">
          <Button aria-label="Close User Modal" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            aria-label="Submit User Modal"
            type="submit"
            form="profileForm"
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </div>
    </BaseModal>
  )
}
