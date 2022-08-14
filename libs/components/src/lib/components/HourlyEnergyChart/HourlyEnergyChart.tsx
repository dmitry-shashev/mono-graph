import React, { FC, useMemo } from 'react'
import { Chart } from 'react-google-charts'
import { HourlyEnergyProduction } from '@mono-graph/core'

type ChartRowType = [string | number, string | number]
type ChartDataType = Array<ChartRowType>

const options = {
  title: 'Energy production by hours',
  hAxis: { title: 'Hour' },
  vAxis: { title: 'Energy Production' },
  legend: 'none',
}

interface Props {
  data: Array<HourlyEnergyProduction>
}

export const HourlyEnergyChart: FC<Props> = ({ data }) => {
  const chartData = useMemo((): ChartDataType => {
    const result: ChartDataType = data.map(
      (value): ChartRowType => [value.hour, value.value]
    )
    return [['Hour', 'Energy Production'], ...result]
  }, [data])

  return (
    <div>
      <Chart
        chartType="LineChart"
        data={chartData}
        options={options}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  )
}
