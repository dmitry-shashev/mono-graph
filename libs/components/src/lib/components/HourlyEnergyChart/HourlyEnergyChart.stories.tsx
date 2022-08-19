import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HourlyEnergyChart } from './HourlyEnergyChart'
import { getTestHourlyEnergyProduction } from '../../test/test-data'

export default {
  component: HourlyEnergyChart,
  title: 'HourlyEnergyChart',
} as ComponentMeta<typeof HourlyEnergyChart>

const Template: ComponentStory<typeof HourlyEnergyChart> = (args) => (
  <HourlyEnergyChart {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  data: getTestHourlyEnergyProduction(),
}
