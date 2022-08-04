import { UserModel } from '@mono-graph/core'
import {
  createSelector,
  createSlice,
  PayloadAction,
  Slice,
} from '@reduxjs/toolkit'
import { RootState } from '../store'

interface UserState {
  user: UserModel
}

const initialState: UserState = {
  user: {
    id: 0,
    firstName: '',
    lastName: '',
  },
}

export const userSlice: Slice<
  UserState,
  {
    requestUser: (state: UserState, _action: PayloadAction) => void
    updateUser: (state: UserState, _action: PayloadAction<UserModel>) => void
    setUser: (state: UserState, action: PayloadAction<UserModel>) => void
  }
> = createSlice({
  name: 'user',
  initialState,
  reducers: {
    requestUser() {},
    setUser(state, action) {
      state.user = action.payload
    },
    updateUser() {},
  },
})

const getUserState = (state: RootState): UserState => state.userReducer

export const getUser: (state: UserState) => UserModel = createSelector(
  getUserState,
  (userState) => userState.user
)

export default userSlice.reducer
