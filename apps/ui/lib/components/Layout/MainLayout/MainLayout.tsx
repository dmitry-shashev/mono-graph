import React, { useEffect } from 'react'
import styles from './MainLayout.module.scss'
import { LayoutComponent } from '../../../type'
import { TopNavigation } from '@mono-graph/components'
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, userSlice } from '@mono-graph/store'
import Meta from '../Meta'
import PagePath from '../../../constants/page-path'

const { requestUser } = userSlice.actions

const MainLayout: LayoutComponent = ({ children: pageComponent, pageMeta }) => {
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
              path: PagePath.Graph,
              label: 'Graph',
              isActive: PagePath.Graph === pageMeta.path,
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

      <div className={styles.content}>{pageComponent}</div>

      <ToastContainer />
    </div>
  )
}

export default MainLayout
