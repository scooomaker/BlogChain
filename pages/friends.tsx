import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'


const profile = [
  {
    name: 'FengXiao',
    img: '/images/sea1.png',
    description: 'I am a student from China',
  }
]

const myfriends = [
  {
    id: 1,
    name: '瞎哔哔的py',
    href: 'https://whisper.pyliubaolin.top/',
    img: 'https://oss.yzbh.tj.cn/halo/avatar.png',
    description: '一秒接过制服，一生志在蓝天！'
  },
  {
    id: 2,
    name: 'ocero',
    href: 'https://ocero-blog.vercel.app/',
    img: 'https://pic.rmb.bdstatic.com/bjh/85ee05046dc5b572bd577f471829b5d1.jpeg',
    description: '一个单调而有趣的博客'
  },
  {
    id: 3,
    name: 'GUOREN',
    href: 'https://guorenjun.xyz/',
    img: 'https://pic.rmb.bdstatic.com/bjh/59a0860cceef75aaa60730346daf4d00.jpeg',
    description: 'None'
  },
]




function friends() {
  return (
    <>
      <Navbar name='friends' />
      <main>
        <div className="font-bold my-32 px-5">
          <p className='text-[48px] max-w-[800px] mx-auto px-3'>Me</p>
          <hr className='mt-16 max-w-[800px] mx-auto' />


          {/* <div className='h-auto flex my-5 bg-blue-50'>
            <div className='w-[128px]'>
              <img src={profileImg} alt="" className="rounded-lg"/>
            </div>
            
            <div className='ml-9'>
              <p className='text-[30px]'>FengXiao</p>
              <p></p>
            </div>
          </div> */}

          {/* <div className='rounded-2xl overflow-hidden mx-2 my-5 tracking-[0.012em]'>
            <div className='card-img'>
              <img src={} alt={} className='w-full h-full object-cover' />
            </div>
            <div className='p-4'>
              <p className='text-2xl font-bold my-6'>{}</p>
              <p className='text-lg font-normal my-6'>{}</p>
            </div>
            <div className='ml-auto flex justify-end'>
              <a href={} className='bg-blue-600 text-white px-3  rounded-[32px] text-[19px] font-light hover:bg-blue-800'>Visit</a>
            </div>

          </div> */}


          <div className='h-[30vh]'></div>

          <p className='text-[48px] max-w-[800px] mx-auto px-3'>My Friends</p>
          <hr className='my-16 max-w-[800px] mx-auto' />

          <div className='max-w-[1000px] mx-auto grid grid-cols-3 lg:grid-cols-2 sm:block'>
            {myfriends.map((item) => (
              <div className='rounded-2xl overflow-hidden mx-2 my-5 tracking-[0.012em]' key={item.id}>
                <div className='card-img'>
                  <img src={item.img} alt={item.name} className='w-full h-full object-cover' />
                </div>
                <div className='p-4'>
                  <p className='text-2xl font-bold my-6'>{item.name}</p>
                  <p className='text-lg font-normal my-6'>{item.description}</p>
                </div>
                <div className='ml-auto flex justify-end'>
                  <a href={item.href} className='bg-blue-600 text-white px-3  rounded-[32px] text-[19px] font-light hover:bg-blue-800'>Visit</a>
                </div>

              </div>
            ))

            }
          </div>


        </div>
      </main>


    </>

  )
}

export default friends