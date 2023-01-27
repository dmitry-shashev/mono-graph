import { ComplexMultiSelector } from './ComplexMultiSelector'
import { getTestPossibleAutocomplete } from '../../test/test-data'
import {
  ariaLabelInTheDocument,
  checkboxValueByTestId,
  clickByTestId,
  typeInInputByAriaLabel,
  Value,
} from '@mono-graph/core'
import { ReactElement, useState } from 'react'
import { render } from '@testing-library/react'

const POSSIBLE = getTestPossibleAutocomplete()

function TestMultiple(): ReactElement {
  const [selected, setSelected] = useState<Array<Value>>([
    POSSIBLE[1]!,
    POSSIBLE[3]!,
  ])
  return (
    <ComplexMultiSelector
      possible={POSSIBLE}
      selected={selected}
      onChange={setSelected}
      topLabel="Rain"
    />
  )
}

describe('ComplexMultiSelector', () => {
  it('component', async () => {
    render(<TestMultiple />)

    // test selection
    await checkboxValueByTestId('cms-0', true)
    await checkboxValueByTestId('cms-1', false)
    await checkboxValueByTestId('cms-2', true)
    clickByTestId('cms-1')
    clickByTestId('cms-2')
    await checkboxValueByTestId('cms-1', true)
    await checkboxValueByTestId('cms-2', false)

    // filter value
    await ariaLabelInTheDocument('Selector checkbox', POSSIBLE.length - 1)
    await typeInInputByAriaLabel('Filter input', 'o')
    await ariaLabelInTheDocument('Selector checkbox', 3)

    expect(true).toBe(true)
  })
})
