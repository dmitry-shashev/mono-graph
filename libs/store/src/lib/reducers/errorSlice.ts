import {
  createSelector,
  createSlice,
  PayloadAction,
  Slice,
} from '@reduxjs/toolkit'
import { RootState } from '../store'

// action.type -> message
interface ErrorState {
  errors: Record<string, string>
}

const initialState: ErrorState = {
  errors: {},
}

export const errorSlice: Slice<
  ErrorState,
  {
    storeError: (
      state: ErrorState,
      action: PayloadAction<{ actionType: string; message: string }>
    ) => void
    clearError: (state: ErrorState, action: PayloadAction<string>) => void
  }
  > = createSlice({
  name: 'error',
  initialState,
  reducers: {
    storeError(state, action) {
      state.errors[action.payload.actionType] = action.payload.message
    },

    clearError(state, action) {
      delete state.errors[action.payload]
    },
  },
})

const getErrorState = (state: RootState): ErrorState => state.errorReducer

export const getError: (state: ErrorState) => (t: string) => string =
  createSelector(
    getErrorState,
    (errorsState) =>
      (errorType: string): string => {
        return errorsState.errors[errorType] ?? ''
      }
  )

export default errorSlice.reducer
