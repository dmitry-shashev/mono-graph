import React, { FC, ReactElement, useEffect } from 'react'
import Meta from './Meta'
import styles from './Layout.module.scss'
import { TopNavigation } from '@mono-graph/components'
import PagePath from '../../constants/page-path'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, userSlice } from '@mono-graph/store'
import { PageMeta } from '@mono-graph/core'
import { ToastContainer } from 'react-toastify'

const { requestUser } = userSlice.actions

interface Props {
  pageMeta: PageMeta
  children: ReactElement
}

const Layout: FC<Props> = ({ children, pageMeta }) => {
  const dispatch = useDispatch()
  const user = useSelector(getUser)

  useEffect(() => {
    dispatch(requestUser())
  }, [dispatch])

  return (
    <div className={styles.wrap}>
      <Meta pageMeta={pageMeta} />

      <div className={styles.navWrap}>
        <TopNavigation
          user={user}
          pages={[
            {
              path: PagePath.VisualizationOfPowerFlows,
              label: 'Visualization Of Power Flows',
              isActive: PagePath.VisualizationOfPowerFlows === pageMeta.path,
            },
            {
              path: PagePath.DailyProduction,
              label: 'Daily Production',
              isActive: PagePath.DailyProduction === pageMeta.path,
            },
            {
              path: PagePath.Profile,
              label: 'User Profile',
              isActive: PagePath.Profile === pageMeta.path,
            },
          ]}
        />
      </div>

      <div className={styles.content}>{children}</div>

      <ToastContainer />
    </div>
  )
}

export default Layout
