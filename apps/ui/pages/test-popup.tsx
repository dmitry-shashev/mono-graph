import React from 'react'
import { LayoutKind, Page, useCallbackOnLocalStorage } from '@mono-graph/core'
import PagePath from '../lib/constants/page-path'

const TestPopupPage: Page = () => {
  const { setupLocalStorageMarker } = useCallbackOnLocalStorage()

  const onMarker = (): void => {
    setupLocalStorageMarker(['engine-event.test1'])
    window.close()
  }

  return (
    <div>
      <h1>New Page</h1>
      <br />
      <button onClick={onMarker} type="button">
        Set up marker and close
      </button>
    </div>
  )
}

TestPopupPage.pageMeta = {
  title: 'Test Popup',
  description: '',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.TestPopup,
}

export default TestPopupPage
