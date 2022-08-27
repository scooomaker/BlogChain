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
        <div className='h-96'>
          <div className='bg-cover bg-no-repeat bg-center h-full' style={{ backgroundImage: `url(${bgImg})` }}>
          </div>
        </div>



        <LittleNav />

        <MainText />

      </div>


    </>

  )
}

export default Home
