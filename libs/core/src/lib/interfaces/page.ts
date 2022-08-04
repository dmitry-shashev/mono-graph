import { ReactElement } from 'react'
import { PageMeta } from './page-meta'

export interface Page {
  (): ReactElement
  pageMeta: PageMeta
}
