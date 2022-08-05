import { LayoutKind } from '../constants/layout-kind'

export interface PageMeta {
  readonly path: string
  readonly title: string
  readonly description: string
  readonly layoutKind: LayoutKind
  readonly keywords: string
}
