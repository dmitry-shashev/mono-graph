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
  const [value, setValue] = useState<Value | undefined>(args.selected)
  return <AutoComplete {...args} selected={value} onChange={setValue} />
}

const possibleData = getTestPossibleAutocomplete()

export const Primary = Template.bind({})
Primary.storyName = 'Base variant'
Primary.args = {
  placeholder: 'Enter some data',
  possible: possibleData,
}

export const OneVariant = Template.bind({})
OneVariant.storyName = 'With one value'
OneVariant.args = {
  possible: [possibleData[0]!],
}

export const WithSelected = Template.bind({})
WithSelected.storyName = 'With Selected'
WithSelected.args = {
  possible: possibleData,
  selected: possibleData[2]!,
}
