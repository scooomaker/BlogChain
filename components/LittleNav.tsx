import React from 'react'
import { Disclosure } from '@headlessui/react'

const navigation = [
  { name: 'Tweets', href: '#', current: true },
  { name: 'Following', href: '#', current: false },
  { name: 'Followers', href: '#', current: false },
  { name: 'Likes', href: '#', current: false },
  { name: 'Likes', href: '#', current: false },
  { name: 'Followers', href: '#', current: false },
  { name: 'Likes', href: '#', current: false },
  { name: 'Likes', href: '#', current: false },



]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


const profileImg = '/images/sea1.png'


function LittleNav() {
  return (
    <>
      <Disclosure as="nav" className="bg-stone-50 shadow-md ">
        {() => (
          <>
            {/* > 1279px */}
            <div className="mx-auto px-2 xl:hidden">

              {/* main  */}
              <div className="relative flex flex-row items-center justify-between h-16">

                {/* img  */}
                <div className='h-48 w-48 flex-1 flex justify-center z-30 sm:hidden'>
                  <img className="z-30 rounded-full -translate-y-6 shadow-2xl xl:hidden" src={profileImg} />
                </div>
                {/* img  */}

                {/* add the navigation item */}
                <div className="flex-1 flex items-center justify-center sm:w-auto sm:overflow-auto sm:touch-pan-right sm:justify-start">
                  <div className="flex">
                    {navigation.map((item) => (
                      <>
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-sky-200 text-black' : 'text-slate-500 hover:bg-sky-50 hover:text-inherit',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </>
                    ))}
                  </div>
                </div>
                {/* add the navigation item */}

                <div className='flex-1 flex sm:hidden'>

                </div>

              </div>
              {/* main  */}

            </div>
            {/* > 1279px */}

            {/* mobile phone */}
            <div className='xlmin:hidden'>
              {/* img  */}
              <div className='relative'>
                <div className='absolute  ml-8 -top-9 '>
                  <img className="w-1/4 rounded-full shadow-2xl z-auto " src={profileImg} />
                </div>
              </div>
              {/* img  */}

              <div className='h-[255px] z-auto pt-16 pl-5 text-left'>
                <div className=' text-2xl font-semibold'>Feng Xiao <span className='font-light text-right pl-5'>&</span></div> 
                <div className='text-sm font-thin '>@scooomaker</div>
                <br /> <br />
                <div className='font-light text-sm'>Not followed by anyone you're follwing </div>
              </div>

              {/* add the navigation item */}
              <div className="items-center justify-center sm:w-auto sm:overflow-auto sm:touch-pan-right sm:justify-start">
                  <div className="flex mx-3 space-x-1">
                    {navigation.map((item) => (
                      <>
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-sky-200 text-black' : 'text-slate-500 hover:bg-sky-50 hover:text-inherit',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </>
                    ))}
                  </div>
                </div>
                {/* add the navigation item */}

            </div>



          </>
        )}
      </Disclosure>
    </>
  )
}

export default LittleNav