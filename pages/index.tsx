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

      <div className=''>
        <Navbar name="index" />
        <div className="flex font-['Noto Sans SC'] font-medium pl-9 text-[6vw] h-screen items-center">
          <span> Hi, I am scooo.</span>
        </div>

      </div>


    </>

  )
}

export default Home
