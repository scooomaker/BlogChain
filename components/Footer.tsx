import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-slate-50 mt-12'>
        <div className='grid mobile:grid-cols-1 pad:grid-cols-2 
        max-w-[980px] mx-auto  grid-cols-3 gap-3 justify-items-center'>

          <div>
            <span className='text-lg font-normal'>Blog</span>
          </div>

          <div>
            <span>Project</span>
          </div>

          <div>
            <span>Me</span>
          </div>

        </div>
      </footer>

    </>
  )
}

export default Footer