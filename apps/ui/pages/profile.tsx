import React from 'react'
import PagePath from '../lib/constants/page-path'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, useActiveRequests, userSlice } from '@mono-graph/store'
import { ProfileForm } from '@mono-graph/components'
import { LayoutKind, Page, UserModel } from '@mono-graph/core'

const { updateUser } = userSlice.actions

const ProfilePage: Page = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const loading = useActiveRequests([updateUser.type])

  const onProfileSubmit = (newUser: UserModel) => {
    dispatch(updateUser(newUser))
  }

  return (
    <div>
      {!!user.id && (
        <ProfileForm
          defaultValues={user}
          onSubmit={onProfileSubmit}
          loading={loading}
        />
      )}
    </div>
  )
}

ProfilePage.pageMeta = {
  title: 'User Profile',
  description: 'Some user profile',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.Profile,
}

export default ProfilePage
