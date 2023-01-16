import React, { FC } from 'react'
import 'reset-css'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/default.scss'
import '../styles/common.scss'
import '../styles/gallery.scss'
import { Provider } from 'react-redux'
import { store } from '@mono-graph/store'
import { AppPropsEngine } from '../lib/type'
import { EMPTY_PAGE_META } from '@mono-graph/core'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Layout from '../lib/components/Layout/Layout'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
})

const AppPage: FC<AppPropsEngine> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Layout pageMeta={Component.pageMeta ?? EMPTY_PAGE_META}>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  )
}

export default AppPage
