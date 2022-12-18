import React from 'react'
import Navbar from '../components/Navbar'

function project() {
    return (
        <>
            <Navbar name='project' />
            <main className='h-screen'>
                <div className="max-w-[1200px] mx-auto my-16 apple py-[5vh] px-[8vw]">
                    <p className='text-[48px]  font-bold'>Project</p>
                    <hr className='my-5' />
                    <p className=''>
                    This is only the beginning
                    </p>
                </div>

            </main>
        </>

    )
}

export default project