import { AppProps } from 'next/app'
import { Page } from '@mono-graph/core'

type AppPropsEngine = AppProps & { Component: Page }

type LayoutComponent = ({
  children,
  pageMeta,
}: {
  children: ReactElement
  pageMeta: PageMeta
}) => ReactElement
