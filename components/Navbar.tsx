
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { AiOutlineHome } from 'react-icons/ai'
import {BiHome} from 'react-icons/bi'

const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'Blog', href: '#', current: true },
  { name: 'Friends', href: '#', current: false },
  { name: 'Project', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const logo = "https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
const profile_img = '/images/sea1.png'
// we must uses /images/xxx.png to change img 


export default function Navbar() {
  return (

    <Disclosure as="nav" className="bg-stone-50 sticky top-0 z-40">
      {({ open }) => (
        <>
          <div className="mx-auto px-2">
            <div className="relative flex items-center justify-between h-16">
              
              <div className="absolute inset-y-0 left-0 flex items-center">

                {/* Mobile menu button*/}
                <div className='invisible md:visible'>
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-sky-200
                 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                </div>
                
              </div>

              
              <div className="flex-1 flex items-center justify-start m-12 md:hidden">

                {/* image here */}
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
                {/* image here */}


                {/* add the navigation item */}
                <div className="">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <>
                        {/* here you should add icons */}
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


              <div className="absolute inset-y-0 right-0 flex items-center pr-2 ">

              {/* View notifications button start */}
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* View notifications button end  */}
                      
                
                {/* Profile start */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={profile_img}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/* Profile end */}

                
              </div>


              
            </div>
          </div>

  

          {/* navigation list (phone) start */}
          <Disclosure.Panel className="absolute">
            <div className="w-screen h-screen px-2 pt-2 pb-3 space-y-1  z-auto bg-white ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-sky-200 text-black' : 'text-slate-500 hover:bg-sky-50 hover:text-inherit',
                    'block px-3 py-2 rounded-md text-base font-medium'
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
