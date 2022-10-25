import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
// import "./i18nextConf";

function MyApp({ Component, pageProps }: AppProps) {

  return (<>
  
   <Component className="w-screen" {...pageProps} />
  </>)
}

export default MyApp
