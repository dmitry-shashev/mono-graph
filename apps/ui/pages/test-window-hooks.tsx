import React, { useState } from 'react'
import {
  LayoutKind,
  Page,
  useWindowKeyUp,
  useWindowResize,
} from '@mono-graph/core'
import PagePath from '../lib/constants/page-path'

const TestWindowHooksPage: Page = () => {
  const [lastKeyUp, setLastKeyUp] = useState<string>('')
  const [resizeDetected, setResizeDetected] = useState<boolean>(false)

  useWindowKeyUp([], (e) => setLastKeyUp(e.key))
  const { width, height } = useWindowResize(() => {
    setResizeDetected(true)
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
