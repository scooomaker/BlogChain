import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'


const Home: NextPage = () => {
  return (
    <>
      <Navbar />



      <div className='bg-fixed bg-auto bg-no-repeat bg-right-top h-96' style={{ backgroundImage: `url('/images/cool-background2.png')` }}></div>

      <main>
      </main>
    </>

  )
}

export default Home
