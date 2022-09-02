import React from 'react'
import Navbar from '../components/Navbar'


const profileImg = '/images/sea1.png'

function friends() {
  return (
    <>
      <Navbar />
      <main className='h-screen'>
        <div className="max-w-[1200px] mx-auto apple text-[48px] py-[5vh] px-[8vw] font-bold">
          Me
          <hr className='mt-5' />


          {/* <div className='h-auto flex my-5 bg-blue-50'>
            <div className='w-[128px]'>
              <img src={profileImg} alt="" className="rounded-lg"/>
            </div>
            
            <div className='ml-9'>
              <p className='text-[30px]'>FengXiao</p>
              <p></p>
            </div>
          </div> */}

          
        </div>
      </main>


    </>

  )
}

export default friends