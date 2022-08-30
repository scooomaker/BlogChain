import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin='true' />
        <link
          href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@400;700&display=swap"
          rel="stylesheet" />
      </Head>


      <div className=''>
        <Navbar name="index" />
        <div className="flex font-qg font-medium pl-9 text-[6vw] h-screen items-center">
          <span> Hi, I am scooo.</span>
        </div>

      </div>


    </>

  )
}

export default Home
