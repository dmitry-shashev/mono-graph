import { useEffect } from 'react'
import { TimeHelper } from '../helpers/time.helper'

type CallbackLocalStorageKey = 'found-pdf-upload' | 'lost-pdf-upload'

interface UseCallbackOnLocalStorageData {
  keys?: Array<CallbackLocalStorageKey>
  callback?: () => void
}

interface UseCallbackOnLocalStorageResult {
  setupLocalStorageMarker: (keys: Array<CallbackLocalStorageKey>) => void
}

export function useCallbackOnLocalStorage({
  keys,
  callback,
}: UseCallbackOnLocalStorageData = {}): UseCallbackOnLocalStorageResult {
  useEffect(() => {
    const eventCallback = (event: unknown): void => {
      const e = event as StorageEvent
      if (!e.key || !e.newValue || !callback) {
        return
      }
      if (!keys?.includes(e.key as CallbackLocalStorageKey)) {
        return
      }

      if (TimeHelper.isValidDate(e.newValue)) {
        const valueDate = new Date(e.newValue)
        const currentDate = new Date()
        // ignore if it older than 1 min
        if (currentDate.getTime() - valueDate.getTime() < 60000) {
          callback()
        }
      }
    }

    window.document.addEventListener('storage', eventCallback)
    return () => {
      window.document.removeEventListener('storage', eventCallback)
    }
  }, [callback])

  return {
    setupLocalStorageMarker: (keys): void => {
      const currentDate = new Date().toISOString()
      keys.forEach((k) => {
        localStorage.setItem(k, currentDate)
      })
    },
  }
}
