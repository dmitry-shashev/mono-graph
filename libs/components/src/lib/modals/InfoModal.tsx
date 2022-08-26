import React, { FC } from 'react'
import BaseModal from './BaseModal'
import { Button } from '@mui/material'

interface Props {
  closeModal: () => void
  isOpened: boolean
  title?: string
  description?: string
}

export const InfoModal: FC<Props> = ({
  closeModal,
  isOpened,
  title,
  description,
}) => {
  return (
    <BaseModal isOpened={isOpened} closeModal={closeModal}>
      <div className="modalWindow">
        {title && <div className="modalHeader">{title}</div>}
        {description && <div className="modalContent">{description}</div>}

        <div className="modalFooter">
          <Button onClick={closeModal}>Close</Button>
        </div>
      </div>
    </BaseModal>
  )
}
