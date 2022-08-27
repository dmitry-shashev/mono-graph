import React, { FC } from 'react'
import BaseModal from './BaseModal'
import { Button } from '@mui/material'

interface Props {
  closeModal: () => void
  isOpened: boolean
  title?: string
  description?: string
  onConfirm: () => void
}

export const ConfirmationModal: FC<Props> = ({
  closeModal,
  isOpened,
  title,
  description,
  onConfirm,
}) => {
  return (
    <BaseModal isOpened={isOpened} closeModal={closeModal}>
      <div className="modalWindow">
        {title && (
          <div aria-label="Modal Title" className="modalHeader">
            {title}
          </div>
        )}
        {description && (
          <div aria-label="Modal Description" className="modalContent">
            {description}
          </div>
        )}

        <div className="modalFooter">
          <Button aria-label="Cancel Modal" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            aria-label="Confirm Modal"
            color="primary"
            variant="contained"
            onClick={onConfirm}
          >
            Confirm
          </Button>
        </div>
      </div>
    </BaseModal>
  )
}
