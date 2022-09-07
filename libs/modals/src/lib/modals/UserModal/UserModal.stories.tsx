import { ComponentStory, ComponentMeta } from '@storybook/react'
import { UserModal } from './UserModal'

export default {
  component: UserModal,
  title: 'User Modal',
} as ComponentMeta<typeof UserModal>

const Template: ComponentStory<typeof UserModal> = (args) => (
  <UserModal {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  closeModal: () => null,
  onSubmit: () => null,
  isOpened: true,
}
