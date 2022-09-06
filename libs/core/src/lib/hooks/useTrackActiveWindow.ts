import { useEffect } from 'react'

interface Props {
  bodyInactiveClass?: string
  onFocus?: () => void
  onBlur?: () => void
}

export function useTrackActiveWindow({
  bodyInactiveClass,
  onFocus,
  onBlur,
}: Props): void {
  useEffect(() => {
    const onFocusHandler = (): void => {
      if (bodyInactiveClass) {
        document.body.classList.remove(bodyInactiveClass)
      }
      onFocus?.()
    }

    const onBlurHandler = (): void => {
      if (bodyInactiveClass) {
        document.body.classList.add(bodyInactiveClass)
      }
      onBlur?.()
    }

    window.onfocus = onFocusHandler
    window.onblur = onBlurHandler
    return () => {
      window.onfocus = null
      window.onblur = null
    }
    // we do not add deps here intentionally
    // we are not going to change input props
  }, [])
}
