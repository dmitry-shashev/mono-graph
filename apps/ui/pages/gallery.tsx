import React from 'react'
import { LayoutKind, Page } from '@mono-graph/core'
import PagePath from '../lib/constants/page-path'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'

const GalleryPage: Page = () => {
  return (
    <div>
      <ImageGallery
        items={IMAGES}
        showFullscreenButton={false}
        showThumbnails={false}
        showPlayButton={false}
        showBullets
        autoPlay
      />
    </div>
  )
}

const IMAGES: ReadonlyArray<ReactImageGalleryItem> = [
  {
    original: '/images/gallery/1.jpeg',
  },
  {
    original: '/images/gallery/2.jpeg',
  },
  {
    original: '/images/gallery/3.jpeg',
  },
]

GalleryPage.pageMeta = {
  title: 'Gallery',
  description: 'Some simple gallery',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.Gallery,
}

export default GalleryPage
