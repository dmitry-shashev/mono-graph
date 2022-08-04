import {
  createSelector,
  createSlice,
  PayloadAction,
  Slice,
} from '@reduxjs/toolkit'
import { RootState } from '../store'

interface RequestState {
  requests: Record<string, boolean>
}

const initialState: RequestState = {
  requests: {},
}

export const requestSlice: Slice<
  RequestState,
  {
    startRequest: (state: RequestState, action: PayloadAction<string>) => void
    stopRequest: (state: RequestState, action: PayloadAction<string>) => void
  }
> = createSlice({
  name: 'request',
  initialState,
  reducers: {
    startRequest(state, action) {
      state.requests[action.payload] = true
    },

    stopRequest(state, action) {
      delete state.requests[action.payload]
    },
  },
})

const getRequestState = (state: RootState): RequestState => state.requestReducer

export const getStartedRequests: (
  state: RequestState
) => (t: Array<string>) => Array<string> = createSelector(
  getRequestState,
  (requestsState) =>
    (requestTypes: Array<string>): Array<string> => {
      return requestTypes.filter((rt) => !!requestsState.requests[rt])
    }
)

export default requestSlice.reducer
