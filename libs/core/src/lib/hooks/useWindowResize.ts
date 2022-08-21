import { useDebouncedCallback } from 'use-debounce'
import { useEffect, useState } from 'react'
import { WindowHelper } from '../helpers/window.helper'
import { WindowSize } from '../interfaces/window-size'

const EVENT_NAME = 'resize'

export function useWindowResize(
  callbackFunc?: (windowSize: WindowSize) => void
): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  const updateCurrentWindowSize = (): void => {
    const newWindowSize = {
      width: WindowHelper.getWidth(),
      height: WindowHelper.getHeight(),
    }
    // skip callback on the first rendering
    if (callbackFunc && windowSize.width !== 0 && windowSize.height !== 0) {
      callbackFunc(newWindowSize)
    }
    setWindowSize(newWindowSize)
  }

  const debouncedCallbackFunc = useDebouncedCallback(() => {
    updateCurrentWindowSize()
  }, 200)

  useEffect(() => {
    updateCurrentWindowSize()

    const listener = (): void => {
      debouncedCallbackFunc()
    }

    window.addEventListener(EVENT_NAME, listener)
    return () => {
      window.removeEventListener(EVENT_NAME, listener)
    }
  }, [])

  return windowSize
}
