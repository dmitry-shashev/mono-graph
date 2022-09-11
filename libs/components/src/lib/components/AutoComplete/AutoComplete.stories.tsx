import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AutoComplete } from './AutoComplete'
import { getTestPossibleAutocomplete } from '../../test/test-data'
import { useState } from 'react'
import { Value } from '@mono-graph/core'

export default {
  component: AutoComplete,
  title: 'AutoComplete',
} as ComponentMeta<typeof AutoComplete>

const Template: ComponentStory<typeof AutoComplete> = (args) => {
  const [value, setValue] = useState<Value | undefined>()
  return <AutoComplete {...args} selected={value} onChange={setValue} />
}

export const Primary = Template.bind({})
Primary.args = {
  possible: getTestPossibleAutocomplete(),
}
