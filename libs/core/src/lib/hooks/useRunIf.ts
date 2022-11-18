import { useEffect } from 'react'

export function useRunIf(
  conditions: ReadonlyArray<boolean>,
  callback: () => void
): void {
  useEffect(() => {
    if (conditions.some((v) => v)) {
      callback()
    }
  }, conditions)
}
