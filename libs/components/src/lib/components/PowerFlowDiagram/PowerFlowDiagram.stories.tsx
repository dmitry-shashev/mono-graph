import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PowerFlowDiagram } from './PowerFlowDiagram'
import { getTestCurrentRealTime } from '../../test/test-data'

export default {
  component: PowerFlowDiagram,
  title: 'PowerFlowDiagram',
} as ComponentMeta<typeof PowerFlowDiagram>

const Template: ComponentStory<typeof PowerFlowDiagram> = (args) => (
  <PowerFlowDiagram {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  data: getTestCurrentRealTime(),
}
