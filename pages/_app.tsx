import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='colorchange'>
      
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      
        < Component {...pageProps} />
      
      <Footer />
    </div>

  )
    
}

export default MyApp
