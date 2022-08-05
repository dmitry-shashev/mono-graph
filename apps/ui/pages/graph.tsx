import React from 'react'
import { LayoutKind, Page, useCurrentRealTime } from '@mono-graph/core'
import PagePath from '../lib/constants/page-path'
import { CircularProgress } from '@mui/material'
import { PowerFlowDiagram } from '@mono-graph/components'

const GraphPage: Page = () => {
  const { loading, errorMessage, data } = useCurrentRealTime()

  if (loading) {
    return (
      <div className="preloaderWrap">
        <CircularProgress />
      </div>
    )
  }

  // just for demo purposes - better to show
  // existing data and the warning toast or
  // a small message near the current data
  if (errorMessage) {
    return (
      <div className="errorMessage">
        <div>{errorMessage}</div>
      </div>
    )
  }

  return <>{data && <PowerFlowDiagram data={data} />}</>
}

GraphPage.pageMeta = {
  title: 'Visualization Of Power Flows',
  description: '',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.Graph,
}

export default GraphPage
