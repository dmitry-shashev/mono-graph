import React, { useState } from 'react'
import { LayoutKind, Page, Value } from '@mono-graph/core'
import PagePath from '../lib/constants/page-path'
import { AutoComplete } from '@mono-graph/components'
import { getTestAutocompleteVariants } from '../lib/test/test-data'

const POSSIBLE_AUTOCOMPLETE = getTestAutocompleteVariants()

const TestAutocompletePage: Page = () => {
  const [autocompleteValue, setAutocompleteValue] = useState<Value | undefined>(
    POSSIBLE_AUTOCOMPLETE[1]
  )
  return (
    <div>
      <h2>Autocomplete</h2>
      <AutoComplete
        possible={POSSIBLE_AUTOCOMPLETE}
        selected={autocompleteValue}
        onChange={setAutocompleteValue}
      />
    </div>
  )
}

TestAutocompletePage.pageMeta = {
  title: 'The Autocomplete page',
  description: 'The Autocomplete page',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.TestAutocomplete,
}

export default TestAutocompletePage
