import { render } from '@testing-library/react'
import { HourlyEnergyChart } from './HourlyEnergyChart'
import { getTestHourlyEnergyProduction } from '../../test/test-data'
import { textInTheDocument } from '@mono-graph/core'
import { ReactElement } from 'react'

jest.mock('react-google-charts', () => ({
  Chart: ({ data }: { data: Array<[string, string]> }): ReactElement => (
    <div>
      {data.map(([a, b]) => (
        <div key={`${a}${b}`}>
          {a}:{b}
        </div>
      ))}
    </div>
  ),
}))

describe('HourlyEnergyChart', () => {
  it('component', async () => {
    const data = getTestHourlyEnergyProduction()
    render(<HourlyEnergyChart data={data} />)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await textInTheDocument(data[0].value)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await textInTheDocument(data[2].value)
  })
})
