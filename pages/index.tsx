import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LittleNav from '../components/LittleNav'
import Navbar from '../components/Navbar'
import MainText from '../components/MainText'


const bgImg = 'https://qiniu.sukoshi.xyz/src/images/68686407_p0.jpg'
// const bgImg = '/images/cool-background2.png'

const Home: NextPage = () => {
  return (
    <>
      <div className='bg-slate-200 '>
        <Navbar />

        {/* backgroundImage */}
        <div className='h-full'>
          {/* <div className=' bg-fixed bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${bgImg})` }}></div> */}

          <img className='bg-fixed bg-cover bg-no-repeat bg-center' src={bgImg} alt="" />
      </div>

        

        <LittleNav />

        <MainText />

      </div>


    </>

  )
}

export default Home
