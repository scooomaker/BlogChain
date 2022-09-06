import React from 'react'

const bgImg = 'https://qiniu.sukoshi.xyz/src/images/68686407_p0.jpg'
// const bgImg = '/images/cool-background2.png'

const profileImg = '/images/sea1.png'

function BgImg() {
  return (
    <>
      <div className='4k:h-[670px] pc:h-96 pad:h-60 mobile:h-40 '>
        <div className='bgimg bg-cover bg-no-repeat bg-center h-full ' style={{ backgroundImage: `url(${bgImg})` }}>
        </div>

       

      </div>

    </>
  )
}

export default BgImg