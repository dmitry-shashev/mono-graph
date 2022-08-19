import React, { FC } from 'react'
import styles from './TopNavigation.module.scss'
import Link from 'next/link'
import clsx from 'clsx'
import { User } from '@mono-graph/core'
import TopNavigationPage from '../../interfaces/top-navigation-page'

interface Props {
  pages: Array<TopNavigationPage>
  user: User
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
                  className={clsx(styles.link, {
                    [styles.active]: isActive,
                  })}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div aria-label="Full Name" className={styles.userName}>
          {user.firstName} {user.lastName}
        </div>
      </div>
    </div>
  )
}
