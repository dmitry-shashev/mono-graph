import React from 'react'
import {
  LayoutKind,
  Page,
  useDailyEnergyProductionQuery,
} from '@mono-graph/core'
import PagePath from '../lib/constants/page-path'
import { CircularProgress } from '@mui/material'
import { HourlyEnergyChart } from '@mono-graph/components'

const DailyProductionPage: Page = () => {
  const { loading, error, data } = useDailyEnergyProductionQuery()

  if (loading) {
    return (
      <div className="preloaderWrap">
        <CircularProgress />
      </div>
    )
  }

  if (error) {
    return (
      <div className="errorMessage">
        <div>{error.message}</div>
      </div>
    )
  }

  return (
    <div>
      {data && <HourlyEnergyChart data={data.getDailyEnergyProduction} />}
    </div>
  )
}

DailyProductionPage.pageMeta = {
  title: 'Daily Production',
  description: '',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.DailyProduction,
}

export default DailyProductionPage
