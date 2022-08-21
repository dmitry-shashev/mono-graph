import { useEffect } from 'react'

const EVENT_NAME = 'keyup'

export function useWindowKeyUp(
  keyboardKeys: Array<string>,
  callbackFunc: (e: KeyboardEvent) => void
): void {
  useEffect(() => {
    const listener = (e: KeyboardEvent): void => {
      if (keyboardKeys.length === 0 || keyboardKeys.includes(e.key)) {
        callbackFunc(e)
      }
    }

    window.addEventListener(EVENT_NAME, listener)
    return () => {
      window.removeEventListener(EVENT_NAME, listener)
    }
  }, [])
}
