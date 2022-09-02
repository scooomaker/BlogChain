import type { NextPage } from 'next'
import Navbar from '../components/Navbar'



const Home: NextPage = () => {
  return (
    <>

      {/* <div className=''> */}
      <Navbar/>
      
        {/* <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover z-0'>
          <source src='/video/video.mp4' />
        </video> */}
        

        <div className="pages flex font-MrDafoe pl-8 h-screen items-center mobile:text-[60px] pad:text-[96px] pc:text-[128px] pc:pl-[90px] 4k:text-[140px] 4k:pl-[100px] select-none colorchange">
          <div className=''> Hi, I am scooo.</div>

        </div>
      {/* </div> */}

    </>

  )
}

export default Home
