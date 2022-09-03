import { RefObject, useEffect } from 'react'

export function useOnClickOutside(
  innerElementRef: RefObject<HTMLElement>,
  onClickOutside: (e: MouseEvent) => void
): void {
  useEffect(() => {
    const listener = (e: MouseEvent): void => {
      if (
        !innerElementRef.current ||
        !e.target ||
        innerElementRef.current.contains(e.target as Node)
      ) {
        return
      }
      onClickOutside(e)
    }
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [])
}
