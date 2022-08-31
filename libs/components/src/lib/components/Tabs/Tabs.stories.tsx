import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tabs } from './Tabs'

export default {
  component: Tabs,
  title: 'Tabs',
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <div>The first tab</div>
    <div>The second tab</div>
    <div>The third tab</div>
  </Tabs>
)

export const Primary = Template.bind({})
Primary.args = {
  currentIndex: 1,
  titles: ['First tab', 'Second', 'Some third tab'],
}
