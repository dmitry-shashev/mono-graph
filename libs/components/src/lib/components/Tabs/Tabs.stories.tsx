import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tabs } from './Tabs'
import { useState } from 'react'

export default {
  component: Tabs,
  title: 'Tabs',
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [tab, setTab] = useState<number>(args.currentTab)
  return (
    <Tabs titles={args.titles} onTabChange={setTab} currentTab={tab}>
      <div>The first tab</div>
      <div>The second tab</div>
      <div>The third tab</div>
    </Tabs>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  currentTab: 1,
  titles: ['First tab', 'Second', 'Some third tab'],
}
