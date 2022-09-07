import { createContext } from 'react'
import { ModalType } from './constants/modal-type'
import { TypeHelper } from '@mono-graph/core'

interface ModalContextData {
  modals: Record<ModalType, boolean>
}

export const ModalContext = createContext<ModalContextData>({
  modals: TypeHelper.getEnumValuesAsRecord(ModalType, false),
})
