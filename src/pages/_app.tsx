import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Head from 'next/head'
import { ReactQueryDevtools } from 'react-query-devtools'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>Schedule App</title>
        <meta property="og:title" content="Schedule App" key="title" />
        <meta
          property="og:description"
          content="Schedule App is a platform for management employee's shifts."
          key="description"
        />
        <meta
          name="description"
          property="og:description"
          content="Schedule App is a platform for management employee's shifts."
        />
        <meta charSet="utf-8" key="charSet" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  )
}

export default MyApp
