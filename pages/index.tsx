import type { NextPage } from 'next'



const Home: NextPage = () => {
  return (
    <>

      <div className='flex'>
        <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover z-0'>
          <source src='/video/video.mp4' />
        </video>


        <div className="pages h-screen flex font-MrDafoe text-white z-10 pl-8  items-center select-none drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]
        mobile:text-[60px] pad:text-[96px] pc:text-[128px] pc:pl-[90px] 4k:text-[140px] 4k:pl-[100px] dark:text-black">
          <div className=''> Hi, I am scooo.</div>

        </div>
      </div>




    </>

  )
}

export default Home
