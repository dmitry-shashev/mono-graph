import React, { FC, ReactNode } from 'react'
import styles from './PreloaderOpacity.module.scss'
import clsx from 'clsx'

interface Props {
  isLoading: boolean
  children: ReactNode
}

export const PreloaderOpacity: FC<Props> = ({ isLoading, children }) => {
  return (
    <div
      aria-label={isLoading ? 'Loading' : 'Loaded'}
      className={clsx({ [styles.isLoading ?? '']: isLoading })}
    >
      {children}
    </div>
  )
}
