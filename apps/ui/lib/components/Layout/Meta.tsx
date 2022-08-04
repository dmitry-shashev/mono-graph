import Head from 'next/head'
import React, { FC } from 'react'
import { SITE_COLOR, SITE_NAME } from '../../constants/site'
import { PageMeta } from '@mono-graph/core'

interface Props {
  pageMeta: PageMeta
}

const Meta: FC<Props> = ({ pageMeta }) => {
  return (
    <Head>
      <title>{pageMeta.title}</title>
      <base href="/" />
      <link rel="canonical" href={pageMeta.path} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={pageMeta.description} />
      <meta name="keywords" content={pageMeta.keywords} />
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta name="theme-color" content={SITE_COLOR} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageMeta.title} />
      <meta property="og:description" content={pageMeta.description} />
      <meta property="og:url" content={pageMeta.path} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={pageMeta.title} />
      <meta property="twitter:description" content={pageMeta.description} />
      <meta property="twitter:url" content={pageMeta.path} />
    </Head>
  )
}

export default Meta
