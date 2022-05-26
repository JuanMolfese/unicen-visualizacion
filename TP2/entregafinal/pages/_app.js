import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  
  return <SessionProvider>
        <Head >
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
        </Head>
          <Component {...pageProps} />
        </SessionProvider>  
}

export default MyApp
