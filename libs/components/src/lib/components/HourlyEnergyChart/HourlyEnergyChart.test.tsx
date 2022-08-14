import { render } from '@testing-library/react'
import { HourlyEnergyChart } from './HourlyEnergyChart'
import { getTestHourlyEnergyProduction } from '../../test/test-data'
import { textInTheDocument } from '../../test/test-utils'

jest.mock('react-google-charts', () => ({
  Chart: ({ data }: { data: Array<[string, string]> }) => (
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

    await textInTheDocument(data[0].value)
    await textInTheDocument(data[2].value)
  })
})
