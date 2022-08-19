import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TopNavigation } from './TopNavigation'
import { getTestTopNavPages, getTestUser } from '../../test/test-data'

export default {
  component: TopNavigation,
  title: 'TopNavigation',
} as ComponentMeta<typeof TopNavigation>

const Template: ComponentStory<typeof TopNavigation> = (args) => (
  <TopNavigation {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  pages: getTestTopNavPages(),
  user: getTestUser(),
}
