import { AppProps } from 'next/app'
import { Page } from '@mono-graph/core'

type AppPropsEngine = AppProps & { Component: Page }
