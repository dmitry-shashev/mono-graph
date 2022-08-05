import { PageMeta } from '../interfaces/page-meta'
import { LayoutKind } from './layout-kind'

export const EMPTY_PAGE_META: PageMeta = {
  title: '',
  description: '',
  keywords: '',
  layoutKind: LayoutKind.Empty,
  path: '',
}
