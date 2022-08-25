import { ModalType, TypeHelper } from '@mono-graph/core'
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { createSelector } from 'reselect'

interface ModalState {
  modals: Record<ModalType, boolean>
}

const initialState: ModalState = {
  modals: TypeHelper.getEnumValuesAsRecord(ModalType, false),
}

export const modalSlice: Slice<
  ModalState,
  {
    openModal: (state: ModalState, action: PayloadAction<ModalType>) => void
    closeModal: (state: ModalState, action: PayloadAction<ModalType>) => void
  }
> = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal(state, action) {
      state.modals[action.payload] = true
    },
    closeModal(state, action) {
      state.modals[action.payload] = false
    },
  },
})

const getModalState = (state: RootState): ModalState => state.modalReducer

export const getModal: (
  state: ModalState
) => (modalType: ModalType) => boolean = createSelector(
  getModalState,
  (modalState) => (modalType) => {
    return modalState.modals[modalType]
  }
)

export default modalSlice.reducer
