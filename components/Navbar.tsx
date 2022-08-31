import { Fragment } from 'react'
import { AppProps } from 'next/app';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { AiOutlineHome } from 'react-icons/ai'
import { BiHome } from 'react-icons/bi'



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const logo = "https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
const profile_img = '/images/sea1.png'
// we must uses /images/xxx.png to change img 


export default function Navbar(props: { name: string }) {
  let cur1 = false, cur2 = false, cur3 = false, cur4 = false;
  let name:string;
  switch (props.name) {
    case 'index': cur1 = true; name = 'home'; break;
    case 'blog': cur2 = true;name = 'blog'; break;
    case 'friends': cur3 = true;name = 'friends'; break;
    case 'project': cur4 = true; name = 'project';break;
    default:break;
  }


  const navigation = [
    { name: 'Home', href: '/', current: cur1 },
    { name: 'Blog', href: '/blog/page', current: cur2 },
    { name: 'Friends', href: '/friends', current: cur3 },
    { name: 'Project', href: '/project', current: cur4 },
  ]


  return (

    <Disclosure as="nav" className="bg-stone-50 sticky top-0 z-40">
      {({ open }) => (
        <>
          <div className="mx-auto px-2">
            <div className="relative flex items-center justify-end mobile:h-[80px] pad:h-[100px] pc:h-[120px] 4k:h-[150px]">

              <div className="flex-1 flex items-center justify-start m-12 mobile:m-3">
                {/* image here */}
                <div className="flex-shrink-0 flex items-center">
                  <div className='uppercase  text-[35px] font-JosefinSans mb-0 pb-0 pt-2 mobile:text-[20px] pad:text-[28px]'>
                    {name}
                  </div>
                  {/* <imgont-bold
                    className="block h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  /> */}
                </div>
              </div>


              <Disclosure.Panel className="lg:hidden">
                <div className=''>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? ' text-black' : 'text-slate-500',
                        'navfunc uppercase text-[30px] font-thin pad:text-[25px]'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>



              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 ">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <>
                    <XIcon className="block h-12 w-12 mobile:h-8 mobile:w-8 pad:h-10 pad:w-10" aria-hidden="true" />
                  </>

                ) : (
                  <>
                    <MenuIcon className="block h-12 w-12 mobile:h-8 mobile:w-8 pad:h-10 pad:w-10" aria-hidden="true" />
                  </>
                )}
              </Disclosure.Button>




            </div>
          </div>




          <Disclosure.Panel className="absolute lgmin:hidden">
            <div className="w-screen h-[220px] space-y-3  z-auto bg-stone-50  navmap ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-sky-200 text-black' : 'text-slate-500 hover:bg-sky-50 hover:text-inherit',
                    'block px-3 py-2 rounded-md text-base font-medium ml-12 mr-12'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>





        </>
      )}
    </Disclosure>

  )
}
