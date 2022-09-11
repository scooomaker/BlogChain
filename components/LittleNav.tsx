import React from 'react'
import Image from 'next/image'

const navigation = [
  { name: 'Blog', href: '#', current: true },
  { name: 'Ins', href: '#', current: false },
  { name: 'Life', href: '#', current: false },
  { name: 'News', href: '#', current: false },

]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


const profileImg = '/images/sea1.png'


function LittleNav() {


  return (
    <>

      {/* Desktop > 1279px (pc and 4k) */}
      <div className='bg-zinc-300'>
        <section className="mx-auto">


          <div className='w-[24%] float-left relative'>
            <div className='absolute -top-28 ml-8'>
              <img className="rounded-full ring-white w-48 ring-4 shadow-2xl z-auto" src={profileImg} />
            </div>
          </div>

          <div className='w-[24%] float-left'>
            &nbsp;
          </div>


          {/* add the navigation item */}
          <div className="w-[76%] py-4">
            {navigation.map((item) => (
              <>
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    'apple px-4 nav-menu text-lg font-medium py-4 hover:border-b-4 hover:border-[#7b878c]'
                  )}
                >
                  {item.name}
                </a>
              </>
            ))}
          </div>


        </section>
      </div>
      {/* Desktop > 1279px (pc and 4k) */}

















      {/* mobile < 1280px (iphone and ipad) */}
      <div className='hidden h-auto'>
      {/* <div className='xlmin:hidden h-auto'> */}
        {/* img  */}
        <div className='relative'>
          <div className='absolute  mobile:ml-8 mobile:-top-10 pad:ml-14 pad:-top-16 pc:ml-14 pc:-top-16'>
            <div className='mobile:w-[90px] pad:w-[120px] pc:w-[120px]'>
              <Image src={profileImg} width={200} height={200} className="rounded-full  z-auto " />
            </div>
          </div>
        </div>
        {/* img  */}

        <div className='h-[255px] z-auto pt-16 mobile:pl-5 pad:pl-14 pc:pl-14 text-left'>
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
      {/* mobile < 1280px (iphone and ipad) */}








    </>
  )
}

export default LittleNav


