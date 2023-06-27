import React from 'react'
import { LayoutKind, Page, useCallbackOnLocalStorage } from '@mono-graph/core'
import PagePath from '../lib/constants/page-path'

const OpenPopupPage: Page = () => {
  useCallbackOnLocalStorage({
    keys: ['engine-event.test1'],
    callback: () => {
      // eslint-disable-next-line no-alert
      alert('Event has been caught')
    },
  })

  const onPopup = (): void => {
    window.open(PagePath.TestPopup, 'Test Popup', 'width=300,height=300')
  }

  return (
    <div>
      <h1>New Page</h1>
      <br />
      <button onClick={onPopup} type="button">
        Open popup
      </button>
    </div>
  )
}

OpenPopupPage.pageMeta = {
  title: 'Open Popup',
  description: '',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.OpenPopup,
}

export default OpenPopupPage
