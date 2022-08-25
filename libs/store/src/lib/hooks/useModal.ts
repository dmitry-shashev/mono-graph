import { useDispatch, useSelector } from 'react-redux'
import { getModal, modalSlice } from '../reducers/modalSlice'
import { ModalType } from '@mono-graph/core'

const { openModal, closeModal } = modalSlice.actions

interface UseModalResult {
  openModal: () => void
  closeModal: () => void
  isModalOpened: boolean
}

export function useModal(modalType: ModalType): UseModalResult {
  const dispatch = useDispatch()
  const isModalOpened = useSelector(getModal)(modalType)

  return {
    isModalOpened,
    openModal: () => {
      dispatch(openModal(modalType))
    },
    closeModal: () => {
      dispatch(closeModal(modalType))
    },
  }
}
