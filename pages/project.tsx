import React from 'react'
import Navbar from '../components/Navbar'

function project() {
    return (
        <>
      <Navbar name='project' />
            <main className='h-screen'>
                <div className="max-w-[1200px] mx-auto my-16 apple text-[48px] py-[5vh] px-[8vw] font-bold">
                    Project
                    <hr className='my-5' />

                </div>
            </main>
        </>

    )
}

export default project