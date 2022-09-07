import React, { FC, ReactElement } from 'react'
import { createPortal } from 'react-dom'
import styles from './BaseModal.module.scss'

interface Props {
  children: ReactElement
  isOpened: boolean
  closeModal: () => void
}

const BaseModal: FC<Props> = ({ children, isOpened, closeModal }) => {
  if (!isOpened) {
    return null
  }

  const portal = document.getElementById('modal-portal')
  if (!portal) {
    return null
  }

  return createPortal(
    <div className={styles.wrap}>
      <div
        aria-label="Modal Background"
        className={styles.bg}
        onClick={closeModal}
      />
      <div className={styles.content}>
        <button
          aria-label="Close Modal"
          className={styles.close}
          type="button"
          onClick={closeModal}
        >
          &times;
        </button>

        {children}
      </div>
    </div>,
    portal
  )
}

export default BaseModal
