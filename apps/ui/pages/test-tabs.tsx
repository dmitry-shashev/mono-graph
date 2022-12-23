import React from 'react'
import { LayoutKind, Page } from '@mono-graph/core'
import PagePath from '../lib/constants/page-path'
import { Tabs } from '@mono-graph/components'

const TestTabsPage: Page = () => {
  return (
    <div>
      <Tabs titles={['Tab 1', 'Tab 2', 'Tab 3']} currentTab={1}>
        <div>Some tab 1</div>
        <div>Some tab 2</div>
        <div>Some tab 3</div>
      </Tabs>
    </div>
  )
}

TestTabsPage.pageMeta = {
  title: 'Test Tabs',
  description: 'Test Tabs',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.TestTabs,
}

export default TestTabsPage
