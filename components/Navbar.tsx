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
  let cur1, cur2, cur3, cur4 = false;
  if (props.name == "index") {
    cur1 = true;
  } else if (props.name == "blog") {
    cur2 = true;
  } else if (props.name == "friends") {
    cur3 = true;
  } else if (props.name == "project") {
    cur4 = true;
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

              <div className=''>
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-9 w-9" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-9 w-9" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

            </div>
          </div>



          {/* navigation list (phone) start */}
          <Disclosure.Panel className="absolute">
            <div className="w-screen h-screen px-2 pt-2 pb-3 space-y-1  z-auto bg-slate-100 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-sky-200 text-black' : 'text-slate-500 hover:bg-sky-50 hover:text-inherit',
                    'block px-3 py-2 rounded-md text-base font-medium '
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          {/* nabigation list (phone) end  */}

        </>
      )}
    </Disclosure>

  )
}
