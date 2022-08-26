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
        {title && <div className="modalHeader">{title}</div>}
        {description && <div className="modalContent">{description}</div>}

        <div className="modalFooter">
          <Button onClick={closeModal}>Cancel</Button>
          <Button color="primary" variant="contained" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </BaseModal>
  )
}
