import createSagaMiddleware from '@redux-saga/core'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import requestReducer from '../lib/reducers/requestSlice'
import errorReducer from '../lib/reducers/errorSlice'
import userReducer from '../lib/reducers/userSlice'
import { watchUserSaga } from './sagas/user.saga'

const sagaMiddleware = createSagaMiddleware()

export const store: EnhancedStore = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  reducer: {
    requestReducer,
    errorReducer,
    userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(watchUserSaga)
