import { userSlice } from '../reducers/userSlice'
import { call, put, takeEvery } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { simpleRequest, simpleToastRequest } from './common'
import { ResourceService, User } from '@mono-graph/core'

const { requestUser, setUser, updateUser } = userSlice.actions

function* workRequestUser(action: PayloadAction) {
  yield simpleRequest(
    action.type,
    function* () {
      return yield call(ResourceService.getUser)
    },
    function* (user: User) {
      yield put(setUser(user))
    }
  )
}

function* workUpdateUser(action: PayloadAction<User>) {
  yield simpleToastRequest(
    action.type,
    function* () {
      return yield call(ResourceService.updateUser, action.payload)
    },
    function* () {
      yield put(requestUser())
    }
  )
}

export function* watchUserSaga(): Generator {
  yield takeEvery(requestUser.type, workRequestUser)
  yield takeEvery(updateUser.type, workUpdateUser)
}
