import { useEffect, useState } from 'react'

function applyStyles(): void {
  const forms = document.querySelectorAll('.formContent,.formItemContent')
  forms.forEach((form) => {
    let marker = 0
    for (let i = 0; i < form.children.length; ++i) {
      const elem = form.children?.[i]
      // skip empty
      if (!elem || elem.hasAttribute('hidden')) {
        continue
      }
      // skip hidden
      if (elem.hasAttribute('hidden')) {
        if (elem.hasAttribute('data-row-color')) {
          elem.removeAttribute('data-row-color')
        }
        continue
      }
      elem.setAttribute('data-row-color', marker++ % 2 ? 'even' : 'odd')
    }
  })
}

export function useOddEvenForms(): void {
  const [state, setState] = useState<number>(0)
  useEffect(() => {
    applyStyles()
  }, [state])

  useEffect(() => {
    const observer = new MutationObserver(() => {
      // react reduce renders - and in this state for 5 forms
      // it will run "applyStyles" only once
      //   some light-weight debounce functionality
      setState((v) => v + 1)
    })
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
    return () => {
      observer.disconnect()
    }
  }, [])
}
