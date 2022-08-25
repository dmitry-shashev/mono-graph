import React, { FC } from 'react'
import BaseModal from './BaseModal'

interface Props {
  closeModal: () => void
  isOpened: boolean
}

export const InfoModal: FC<Props> = ({ closeModal, isOpened }) => {
  return (
    <BaseModal isOpened={isOpened} onBgClick={closeModal}>
      <div>
        <h1>Some Modal</h1>
        <button type="button" onClick={closeModal}>
          Close
        </button>
      </div>
    </BaseModal>
  )
}
