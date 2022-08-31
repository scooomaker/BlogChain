import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>


      <div className='z-auto'>
        <Navbar name="index" />
        <div className="pages flex font-MrDafoe pl-8 h-screen items-center mobile:text-[60px] pad:text-[96px] pc:text-[128px] pc:pl-[90px] 4k:text-[140px] 4k:pl-[100px] select-none">
          <div className=''> Hi, I am scooo.</div>
          
        </div>
      </div>


    </>

  )
}

export default Home
