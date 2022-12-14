import React from 'react'
import { render } from '@testing-library/react'
import { PreloaderOpacity } from './PreloaderOpacity'
import {
  ariaLabelContainText,
  ariaLabelNotInTheDocument,
  textInTheDocument,
} from '@mono-graph/core'

const TEST_NAME = 'One'

describe('PreloaderOpacity', () => {
  it('Loaded', async () => {
    render(<PreloaderOpacity isLoading={false}>{TEST_NAME}</PreloaderOpacity>)
    await textInTheDocument(TEST_NAME)
    await ariaLabelContainText('Loaded', TEST_NAME)
    await ariaLabelNotInTheDocument('Loading')
  })

  it('loading', async () => {
    render(<PreloaderOpacity isLoading>{TEST_NAME}</PreloaderOpacity>)
    await textInTheDocument(TEST_NAME)
    await ariaLabelContainText('Loading', TEST_NAME)
    await ariaLabelNotInTheDocument('Loaded')
  })
})
