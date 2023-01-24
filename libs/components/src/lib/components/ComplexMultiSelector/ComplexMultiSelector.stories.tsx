import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ComplexMultiSelector } from './ComplexMultiSelector'

export default {
  component: ComplexMultiSelector,
  title: 'ComplexMultiSelector',
} as ComponentMeta<typeof ComplexMultiSelector>

const Template: ComponentStory<typeof ComplexMultiSelector> = (args) => (
  <ComplexMultiSelector {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
