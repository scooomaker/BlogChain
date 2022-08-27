import React from 'react'

const bgImg = 'https://qiniu.sukoshi.xyz/src/images/68686407_p0.jpg'
// const bgImg = '/images/cool-background2.png'

function BgImg() {
  return (
      <>
        <div className='h-96 md:h-80 sm:h-60 mobile:h-40'>
          <div className='bg-cover bg-no-repeat bg-center h-full' style={{ backgroundImage: `url(${bgImg})` }}>
          </div>
        </div>
      </>
  )
}

export default BgImg