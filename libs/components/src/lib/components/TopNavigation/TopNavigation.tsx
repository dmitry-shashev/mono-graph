import React, { FC } from 'react'
import styles from './TopNavigation.module.scss'
import Link from 'next/link'
import clsx from 'clsx'
import { UserModel } from '@mono-graph/core'

interface Props {
  pages: Array<{
    label: string
    path: string
    isActive: boolean
  }>
  user: UserModel
}

export const TopNavigation: FC<Props> = ({ pages, user }) => {
  return (
    <div aria-label="Top Navigation" className={styles.wrap}>
      <div className={styles.wrapContent}>
        <ul className={styles.navList}>
          {pages.map(({ label, path, isActive }) => (
            <li key={path}>
              <Link href={path}>
                <a
                  className={clsx('unStyledLink', {
                    [styles.active]: isActive,
                  })}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.userName}>
          {user.firstName} {user.lastName}
        </div>
      </div>
    </div>
  )
}
