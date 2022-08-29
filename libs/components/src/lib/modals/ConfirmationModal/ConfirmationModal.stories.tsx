import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ConfirmationModal } from './ConfirmationModal'

export default {
  component: ConfirmationModal,
  title: 'Confirmation Modal',
} as ComponentMeta<typeof ConfirmationModal>

const Template: ComponentStory<typeof ConfirmationModal> = (args) => (
  <ConfirmationModal {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  closeModal: () => null,
  onConfirm: () => null,
  isOpened: true,
  title: 'Are you sure?',
  description: 'Please confirm in order to proceed',
}
