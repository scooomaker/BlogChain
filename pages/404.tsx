import router from 'next/router'
import React from 'react'

function custom404(props:any) {
  setTimeout(() => {
    router.push('/')
  },2500)
  return (
    <div className='flex font-bold text-center text-8xl h-screen'>

      <div className='items-center my-auto mx-auto'>404 Not Found</div>
      

    </div>
  )
}

export default custom404