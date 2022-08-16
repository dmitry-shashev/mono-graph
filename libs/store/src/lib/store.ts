import createSagaMiddleware from '@redux-saga/core'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import requestReducer from '../lib/reducers/requestSlice'
import errorReducer from '../lib/reducers/errorSlice'
import userReducer from '../lib/reducers/userSlice'
import { watchUserSaga } from './sagas/user.saga'

const sagaMiddleware = createSagaMiddleware()

export function createAppStore(): EnhancedStore {
  return configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    reducer: {
      requestReducer,
      errorReducer,
      userReducer,
    },
  })
}

export const store: EnhancedStore = createAppStore()

export type RootState = ReturnType<typeof store.getState>

export type AppStore = typeof store

sagaMiddleware.run(watchUserSaga)
