import { errorSlice, getError } from '../reducers/errorSlice'
import { useDispatch, useSelector } from 'react-redux'

const { clearError } = errorSlice.actions

export function useError(actionType: string): [string, () => void] {
  const dispatch = useDispatch()
  const error = useSelector(getError)(actionType)
  const resetError = (): void => {
    dispatch(clearError(actionType))
  }
  return [error, resetError]
}
