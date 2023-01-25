import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ComplexMultiSelector } from './ComplexMultiSelector'
import { getTestPossibleAutocomplete } from '../../test/test-data'
import { useState } from 'react'
import { Value } from '@mono-graph/core'

const POSSIBLE = getTestPossibleAutocomplete()

export default {
  component: ComplexMultiSelector,
  title: 'ComplexMultiSelector',
} as ComponentMeta<typeof ComplexMultiSelector>

const Template: ComponentStory<typeof ComplexMultiSelector> = (args) => {
  const [selected, setSelected] = useState<Array<Value>>([])
  return (
    <ComplexMultiSelector
      {...args}
      selected={selected}
      onChange={setSelected}
    />
  )
}

export const Primary = Template.bind({})
Primary.args = {
  possible: POSSIBLE,
  selected: [],
  topLabel: 'Multi select',
}

export const SingleMod = Template.bind({})
SingleMod.args = {
  possible: POSSIBLE,
  selected: [],
  singleMod: true,
  topLabel: 'Single select',
}

export const WithDetails = Template.bind({})
WithDetails.args = {
  possible: POSSIBLE,
  selected: [],
  showDetails: true,
  onDetails: () => {
    // eslint-disable-next-line no-alert
    alert('Some details')
  },
  topLabel: 'Multi select with details',
}
