import React, { FC, ReactElement } from 'react'
import Meta from './Meta'
import { LayoutKind, PageMeta } from '@mono-graph/core'
import { LayoutComponent } from '../../type'
import EmptyLayout from './EmptyLayout/EmptyLayout'
import MainLayout from './MainLayout/MainLayout'

function getLayoutElement(layoutKind: LayoutKind): LayoutComponent {
  switch (layoutKind) {
    case LayoutKind.Empty:
      return EmptyLayout
    case LayoutKind.Main:
      return MainLayout
  }
}

interface Props {
  pageMeta: PageMeta
  children: ReactElement
}

const Layout: FC<Props> = ({ pageMeta, children: pageComponent }) => {
  const LayoutElement = getLayoutElement(pageMeta.layoutKind)
  return (
    <>
      <Meta pageMeta={pageMeta} />

      <LayoutElement pageMeta={pageMeta}>{pageComponent}</LayoutElement>
    </>
  )
}

export default Layout
