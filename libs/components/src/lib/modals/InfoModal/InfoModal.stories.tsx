import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InfoModal } from './InfoModal'

export default {
  component: InfoModal,
  title: 'Info Modal',
} as ComponentMeta<typeof InfoModal>

const Template: ComponentStory<typeof InfoModal> = (args) => (
  <InfoModal {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  closeModal: () => null,
  isOpened: true,
  title: 'Some Info Modal',
  description: 'Some very important description',
}
