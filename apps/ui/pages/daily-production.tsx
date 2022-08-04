import React from 'react'
import { Page, useDailyEnergyProduction } from '@mono-graph/core'
import PagePath from '../lib/constants/page-path'
import { CircularProgress } from '@mui/material'
import { HourlyEnergyChart } from '@mono-graph/components'

const DailyProductionPage: Page = () => {
  const { loading, errorMessage, data } = useDailyEnergyProduction()

  if (loading) {
    return (
      <div className="preloaderWrap">
        <CircularProgress />
      </div>
    )
  }

  if (errorMessage) {
    return (
      <div className="errorMessage">
        <div>{errorMessage}</div>
      </div>
    )
  }

  return (
    <div>
      <HourlyEnergyChart data={data} />
    </div>
  )
}

DailyProductionPage.pageMeta = {
  title: 'Daily Production',
  description: '',
  keywords: '',
  path: PagePath.DailyProduction,
}

export default DailyProductionPage
