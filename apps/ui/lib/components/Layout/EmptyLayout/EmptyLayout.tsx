import React from 'react'
import { LayoutComponent } from '../../../type'

const EmptyLayout: LayoutComponent = ({ children: pageComponent }) => {
  return <div>{pageComponent}</div>
}

export default EmptyLayout
