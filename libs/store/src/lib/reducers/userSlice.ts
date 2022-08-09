import {
  createSelector,
  createSlice,
  PayloadAction,
  Slice,
} from '@reduxjs/toolkit'
import { RootState } from '../store'
import { EmptyUser, User } from '@mono-graph/core'

interface UserState {
  user: User
}

const initialState: UserState = {
  user: EmptyUser,
}

export const userSlice: Slice<
  UserState,
  {
    requestUser: (state: UserState, _action: PayloadAction) => void
    updateUser: (state: UserState, _action: PayloadAction<User>) => void
    setUser: (state: UserState, action: PayloadAction<User>) => void
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

export const getUser: (state: UserState) => User = createSelector(
  getUserState,
  (userState) => userState.user
)

export default userSlice.reducer
