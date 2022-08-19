import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProfileForm } from './ProfileForm'

export default {
  component: ProfileForm,
  title: 'ProfileForm',
} as ComponentMeta<typeof ProfileForm>

const Template: ComponentStory<typeof ProfileForm> = (args) => (
  <ProfileForm {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
