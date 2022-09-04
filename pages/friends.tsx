import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'



const MyProfile = {
  name: 'FengXiao',
  img: '/images/sea1.png',
  description: 'I am a student from China'
};


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
          

          <p className='text-[48px] max-w-[800px] mx-auto px-3'>My Friends</p>
          <hr className='my-16 max-w-[800px] mx-auto' />

          <div className='max-w-[1000px] mx-auto grid grid-cols-3 lg:grid-cols-2 sm:block'>
            {myfriends.map((item) => (
              <div className='bg-[#fff] dark:bg-[#181818] rounded-2xl overflow-hidden mx-2 my-5 tracking-[0.012em]' key={item.id}>
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



          <p className='text-[48px] max-w-[800px] mx-auto px-3 mt-32'>Me</p>
          <hr className='my-16 max-w-[800px] mx-auto' />

          <div className='max-w-[700px] mx-auto '>
            <div className='rounded-3xl overflow-hidden mx-2 my-5 tracking-[0.012em] grid grid-flow-row-dense grid-cols-2 gap-3 sm:grid-cols-1 bg-[#fff] dark:bg-[#181818]'>

              <div className='card-img'>
                <img src={MyProfile.img} alt={MyProfile.name} className='w-full h-full object-cover' />
              </div>

              <div>
                <div className='p-4'>
                  <p className='text-4xl font-bold my-6'>{MyProfile.name}</p>
                  <p className='text-xl font-normal my-6'>{MyProfile.description}</p>

                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                          <span>Contact Me</span>
                          <ChevronUpIcon
                            className={`${open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-blue-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          My WeChat is a_zero_40
                          <br />
                          My email is scooomaker@foxmail.com
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                </div>
              </div>


            </div>
          </div>


        </div>
      </main>


    </>

  )
}

export default friends