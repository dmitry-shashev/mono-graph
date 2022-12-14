import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PreloaderOpacity } from './PreloaderOpacity'

export default {
  component: PreloaderOpacity,
  title: 'PreloaderOpacity',
} as ComponentMeta<typeof PreloaderOpacity>

const Template: ComponentStory<typeof PreloaderOpacity> = (args) => (
  <PreloaderOpacity {...args}>
    <h1>Some content</h1>
    <br />
    <div>
      <button type="button">Some button</button>
    </div>
  </PreloaderOpacity>
)

export const Primary = Template.bind({})
Primary.args = {
  isLoading: true,
}
