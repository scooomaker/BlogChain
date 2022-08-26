import React from 'react'
import { Disclosure } from '@headlessui/react'

const navigation = [
  { name: 'Tweets', href: '#', current: true },
  { name: 'Following', href: '#', current: false },
  { name: 'Followers', href: '#', current: false },
  { name: 'Likes', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


const profileImg = '/images/sea1.png'


function LittleNav() {
  return (
    <>
      <Disclosure as="nav" className="bg-stone-50 shadow-2xl">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

              {/* main  */}
              <div className="relative flex items-center justify-between h-16">

                {/* img  */}
                <div className='h-[150px] w-[150px] flex-1 flex justify-center '>
                  <img className="imaged shadow-2xl" src={profileImg} />
                  {/* <img className="rounded-full ring-2 -translate-y-6 " src={profileImg} /> */}
                  {/* I don't know how to uses tailwind to solve this problem, so I use the base css. */}
                </div>
                {/* img  */}

                {/* add the navigation item */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex space-x-4">
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

                <div className='flex-1 flex'>

                </div>

              </div>
              {/* main  */}


            </div>



          </>
        )}
      </Disclosure>
    </>
  )
}

export default LittleNav