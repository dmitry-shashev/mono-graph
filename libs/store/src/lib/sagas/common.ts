import { put } from '@redux-saga/core/effects'
import { errorSlice } from '../reducers/errorSlice'
import { requestSlice } from '../reducers/requestSlice'
import { toast } from 'react-toastify'

const { storeError, clearError } = errorSlice.actions
const { startRequest, stopRequest } = requestSlice.actions

export function* simpleRequest<T>(
  actionType: string,
  apiGenerator: () => Generator,
  responseGenerator: (data: T) => Generator,
  errorCallback?: (e: Error) => void
): Generator {
  try {
    yield put(clearError(actionType))
    yield put(startRequest(actionType))
    const data = (yield apiGenerator()) as T
    yield responseGenerator(data)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    // send the error somewhere
    yield put(
      storeError({
        actionType,
        message: e.message ?? 'Error',
      })
    )
    errorCallback?.(e)
  } finally {
    yield put(stopRequest(actionType))
  }
}

export function* simpleToastRequest<T>(
  actionType: string,
  apiGenerator: () => Generator,
  responseGenerator: (data: T) => Generator,
  errorCallback?: (e: Error) => void,
  successMessage = 'Done',
  errorMessage = 'Error'
): Generator {
  try {
    yield put(clearError(actionType))
    yield put(startRequest(actionType))
    const data = (yield apiGenerator()) as T
    yield responseGenerator(data)
    toast(successMessage, {
      type: 'success',
      position: 'bottom-right',
    })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    // send the error somewhere
    yield put(
      storeError({
        actionType,
        message: e.message ?? 'Error',
      })
    )
    errorCallback?.(e)
    toast(errorMessage, {
      type: 'error',
      position: 'bottom-right',
    })
  } finally {
    yield put(stopRequest(actionType))
  }
}
