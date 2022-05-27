import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  
  return <SessionProvider>
        <Head >
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
          <meta name="mobile-web-app-capable" content="yes"></meta>
          <meta name="apple-mobile-web-app-capable" content="yes"></meta>
          <title>CM Games</title>
        </Head>
          <Component {...pageProps} />
        </SessionProvider>  
}

export default MyApp
