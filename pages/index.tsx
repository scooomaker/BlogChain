import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LittleNav from '../components/LittleNav'
import Navbar from '../components/Navbar'
import MainText from '../components/MainText'


const bgImg = '/images/cool-background2.png'

const Home: NextPage = () => {
  return (
    <>
      <div className='bg-slate-200 h-[10000px]'>
        <Navbar />

        {/* backgroundImage */}
        <div className='bg-fixed bg-cover bg-no-repeat bg-right-top h-96' style={{ backgroundImage: `url(${bgImg})` }}></div>

        <LittleNav />

        <MainText />

      </div>


    </>

  )
}

export default Home
