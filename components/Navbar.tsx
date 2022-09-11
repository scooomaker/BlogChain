import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { CgDarkMode } from "react-icons/cg";

import Link from 'next/link';
import { AiOutlineArrowLeft, AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const logo = "https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
const profile_img = '/images/sea1.png'
// we must uses /images/xxx.png to change img 
let switchdark: boolean = false;


export default function Navbar(props: any) {
  let cur1 = false, cur2 = false, cur3 = false, cur4 = false, cur5 = false;
  let name: string;
  switch (props.name) {
    case 'index': cur1 = true; name = 'home'; break;
    case 'ins': cur2 = true; name = 'ins'; break;
    case 'blog': cur3 = true; name = 'blog'; break;
    case 'friends': cur4 = true; name = 'friends'; break;
    case 'project': cur5 = true; name = 'project'; break;
    case 'slug': name = ''; break;
    default: break;
  }


  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Ins', href: '/ins/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Friends', href: '/friends' },
    { name: 'Project', href: '/project' },
  ]


  // setTimeout(() => {
  //   // animateNav.classList.add('hidden')
  //   let animateNav = document.querySelector("aside");
  //   if (animateNav)
  //   {
  //     animateNav.classList.add('hidden')
  //     console.log("succeed!")
  //     }
  // }, 2000)




  return (

    // backdrop-blur-sm
    // sticky top-0
    <>
      {/* <div className='w-screen bg-blue-900 h-16 mainnav'>
        12345678987654
      </div> */}

        <Disclosure as="nav" className="sticky top-0 colorchange z-[200] bg-white dark:bg-[rgba(0,0,0,0.5)] mainnav">
          {({ open }) => (
            <>
              <div className="mx-auto px-2 ">
                <div className="relative flex items-center justify-end
            ">
                  {/* mobile:h-[80px] pad:h-[100px] pc:h-[120px] 4k:h-[150px] */}

                  <div className="flex-1 flex items-center justify-start py-3 mx-9">
                    {/* image here */}
                    <div className="flex-shrink-0 flex items-center">
                      <div className='uppercase  text-[30px] font-JosefinSans mb-0 pb-0 pt-2 mobile:text-[15px] pad:text-[24px] select-none'>
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
                    <div>
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            'navfunc uppercase font-thin text-[25px] text pad:text-[20px] text-gray-600 hover:text-black dark:text-white dark:hover:text-gray-200'
                          )}
                        // aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </Disclosure.Panel>



                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <>
                        <XIcon className="block h-10 w-10 mobile:h-8 mobile:w-8 pad:h-10 pad:w-10" aria-hidden="true" />
                      </>

                    ) : (
                      <>
                        <MenuIcon className="block h-10 w-10 mobile:h-8 mobile:w-8 pad:h-10 pad:w-10" aria-hidden="true" />
                      </>
                    )}
                  </Disclosure.Button>


                  <div className='cursor-pointer' onClick={() => {
                    if (switchdark == false) {
                      document.documentElement.classList.add('dark');
                      switchdark = true;
                    } else {
                      document.documentElement.classList.remove('dark');
                      switchdark = false;
                    }
                  }}

                  >
                    <IconContext.Provider value={{ size: '2.2em' }}>
                      <CgDarkMode />
                    </IconContext.Provider>
                  </div>


                </div>
              </div>



              {/* map  */}
              <Disclosure.Panel className="absolute  lgmin:hidden">
                <div className="w-screen  space-y-3 z-auto h-fit  bg-stone-50  navmap ">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        'text-slate-500 block px-3 py-2 rounded-md text-base ml-12 mr-12 uppercase mobile:ml-3'
                      )}
                    // aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>





            </>
          )}
        </Disclosure>
    </>



  )
}
