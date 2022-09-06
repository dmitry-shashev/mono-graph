import React, { useRef, useState } from 'react'
import {
  LayoutKind,
  Page,
  useOnClickOutside,
  useTrackActiveWindow,
  useWindowKeyUp,
  useWindowResize,
} from '@mono-graph/core'
import PagePath from '../lib/constants/page-path'

const TestWindowHooksPage: Page = () => {
  const [lastKeyUp, setLastKeyUp] = useState<string>('')
  const [resizeDetected, setResizeDetected] = useState<boolean>(false)

  const [isFocused, setIsFocused] = useState<boolean>(true)
  useTrackActiveWindow({
    onFocus: () => {
      setIsFocused(true)
    },
    onBlur: () => {
      setIsFocused(false)
    },
  })

  useWindowKeyUp([], (e) => setLastKeyUp(e.key))
  const { width, height } = useWindowResize(() => {
    setResizeDetected(true)
  })

  const [lastOutsideClick, setLastOutsideClick] = useState<string>('')
  const buttonRef = useRef(null)
  useOnClickOutside(buttonRef, (e) => {
    setLastOutsideClick(`${e.clientX} ${e.clientY}`)
  })

  return (
    <div>
      <div>Last key up: {lastKeyUp}</div>
      <div>Last window size: {lastKeyUp}</div>
      <br />
      <div>Last width: {width}</div>
      <div>Last height: {height}</div>
      <br />
      {resizeDetected && <div>Resize Detected</div>}
      <br />
      <button type="button" ref={buttonRef}>
        Click outside on: {lastOutsideClick}
      </button>
      <div>Window is {isFocused ? 'active' : 'inactive'}</div>
    </div>
  )
}

TestWindowHooksPage.pageMeta = {
  title: 'Test Window Hooks',
  description: 'Test Window Hooks',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.TestWindowHooks,
}

export default TestWindowHooksPage
