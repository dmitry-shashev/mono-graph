import React from 'react'
import { render } from '@testing-library/react'
import { AutoComplete } from './AutoComplete'
import {
  ariaLabelInTheDocument,
  ariaLabelNotInTheDocument,
  blurByAriaLabel,
  focusByAriaLabel,
  inputHasValue,
  textInTheDocument,
  typeInInputByAriaLabel,
  textNotInTheDocument,
} from '@mono-graph/core'
import { getTestPossibleAutocomplete } from '../../test/test-data'

const INPUT_ARIA_LABEL = 'Autocomplete text input'
const SELECT_ARIA_LABEL = 'Autocomplete dropdown'

describe('AutoComplete', () => {
  it('component', async () => {
    const possible = getTestPossibleAutocomplete()
    const onChange = jest.fn()

    render(<AutoComplete possible={possible} onChange={onChange} />)

    await inputHasValue(INPUT_ARIA_LABEL, '')

    blurByAriaLabel(INPUT_ARIA_LABEL)
    await ariaLabelNotInTheDocument(SELECT_ARIA_LABEL)

    // open on the first try - see all list
    focusByAriaLabel(INPUT_ARIA_LABEL)
    await ariaLabelInTheDocument(SELECT_ARIA_LABEL)
    await textInTheDocument(String(possible[1]!.value))
    await textInTheDocument(String(possible[2]!.value))

    // try to change the input
    await typeInInputByAriaLabel(INPUT_ARIA_LABEL, String(possible[3]!.value))
    await ariaLabelInTheDocument(SELECT_ARIA_LABEL)
    await textNotInTheDocument(String(possible[1]!.value))
    await textNotInTheDocument(String(possible[2]!.value))
    await textInTheDocument(String(possible[3]!.value))

    // on blur functionality
    blurByAriaLabel(INPUT_ARIA_LABEL)
    await inputHasValue(INPUT_ARIA_LABEL, String(possible[3]!.value))
    await typeInInputByAriaLabel(INPUT_ARIA_LABEL, String(possible[0]!.value))
    blurByAriaLabel(INPUT_ARIA_LABEL)
    await inputHasValue(INPUT_ARIA_LABEL, String(possible[0]!.value))
    await typeInInputByAriaLabel(INPUT_ARIA_LABEL, '123321')
    blurByAriaLabel(INPUT_ARIA_LABEL)
    // it is empty - because we do not emulate the state
    await inputHasValue(INPUT_ARIA_LABEL, '')
  })
})
