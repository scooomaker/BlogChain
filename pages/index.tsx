import type { NextPage } from 'next'
import LittleNav from '../components/LittleNav'
import Navbar from '../components/Navbar'
import MainText from '../components/MainText'
import BgImg from '../components/BgImg'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className='bg-slate-200 h-[10000px]'>
        <Navbar />
        <BgImg />
        <LittleNav />
        <MainText />
      </div> */}
      <main className='bg-slate-200'>
        <Navbar />
        <div className="justify-center items-center  p-0 my-[50%]">
          <span className="font-['Noto Sans SC'] font-medium pl-9 absolute top-1/2 left-[15%] mt-[-50px] ml-[-50px] text-[6vw]">
            Hi, I am scooo.
          </span>
        </div>

      </main>


      {/* <Link href="/blog/page"><a>Blog Post</a></Link> */}
    </>

  )
}

export default Home
