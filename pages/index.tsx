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
          href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&family=Mrs+Sheppards&family=Qwitcher+Grypen:wght@700&display=swap"
          rel="stylesheet" />
      </Head>


      <div className=''>
        <Navbar name="index" />
        <div className="flex font-MrDafoe pl-8 h-screen items-center mobile:text-[60px] pad:text-[96px] pc:text-[128px] pc:pl-[90px] 4k:text-[140px] 4k:pl-[100px]">
          <span> Hi, I am scooo.</span>
        </div>

      </div>


    </>

  )
}

export default Home
