import type { NextPage } from 'next'
import ReactDOM from 'react-dom'
import Navbar from '../components/Navbar'
import React, { useEffect, useState } from 'react';

const Home: NextPage = () => {
  // setTimeout(() => {
  //   ReactDOM.render(<Navbar name='index' />, document.getElementById('nav'))
  // }, 200)

  
  return (
    <>
      {/* <Navbar name='index' /> */}
      {/* <div id='nav'></div> */}

        <Navbar name='index'/>
    
      

      <div className='flex h-screen'>
        <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover z-0'>
          <source src="/video/video.mp4" type="video/mp4" />
          <source src="/video/video.webm" type="video/webm; codecs=vp9" />
        </video>


        <div className="pages flex font-MrDafoe text-white z-10 pl-8  items-center select-none drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]
        mobile:text-[60px] pad:text-[96px] pc:text-[128px] pc:pl-[90px] 4k:text-[140px] 4k:pl-[100px] dark:text-black">
          <div className=''> BlogChain</div>

        </div>
      </div>




    </>

  )
}

export default Home
