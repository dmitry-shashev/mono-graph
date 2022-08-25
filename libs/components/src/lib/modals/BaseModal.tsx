import React, { FC, ReactElement } from 'react'
import { createPortal } from 'react-dom'
import styles from './BaseModal.module.scss'

interface Props {
  children: ReactElement
  isOpened: boolean
  onBgClick?: () => void
}

const BaseModal: FC<Props> = ({ children, isOpened, onBgClick }) => {
  if (!isOpened) {
    return null
  }

  const portal = document.getElementById('modal-portal')
  if (!portal) {
    return null
  }

  return createPortal(
    <div className={styles.wrap}>
      <div className={styles.bg} onClick={() => onBgClick?.()} />
      <div className={styles.content}>{children}</div>
    </div>,
    portal
  )
}

export default BaseModal
