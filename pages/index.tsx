import type { NextPage } from 'next'
import LittleNav from '../components/LittleNav'
import Navbar from '../components/Navbar'
import MainText from '../components/MainText'
import BgImg from '../components/BgImg'
import Head from 'next/head'



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className='bg-slate-200 h-[10000px]'>
        <Navbar />
        <BgImg />
        <LittleNav />
        <MainText />
      </div>

    </>

  )
}

export default Home
