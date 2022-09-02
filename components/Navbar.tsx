import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { CgDarkMode } from "react-icons/cg";
import { IconContext } from "react-icons";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const logo = "https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
const profile_img = '/images/sea1.png'
// we must uses /images/xxx.png to change img 
let switchdark: boolean = false;


export default function Navbar() {
  // let cur1 = false, cur2 = false, cur3 = false, cur4 = false;
  // let name: string;
  // switch (props.name) {
  //   case 'index': cur1 = true; name = 'home'; break;
  //   case 'blog': cur2 = true; name = 'blog'; break;
  //   case 'friends': cur3 = true; name = 'friends'; break;
  //   case 'project': cur4 = true; name = 'project'; break;
  //   default: break;
  // }


  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Ins', href: '/ins'},  
    { name: 'Blog', href: '/blog/'},
    { name: 'Friends', href: '/friends'},
    { name: 'Project', href: '/project' },   
  ]


  // let mediadark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // if (mediadark)
  // {
  //   document.documentElement.classList.add('dark');
  //   switchdark = true;
  // }
  // const toggleSwitch = document.querySelector();


  return (

    <Disclosure as="nav" className="colorchange sticky top-0 z-40 bg-stone-50 ">
      {({ open }) => (
        <>
          <div className="mx-auto px-2">
            <div className="relative flex items-center justify-end mobile:h-[80px] pad:h-[100px] pc:h-[120px] 4k:h-[150px]">

              <div className="flex-1 flex items-center justify-start m-12 mobile:m-3">
                {/* image here */}
                <div className="flex-shrink-0 flex items-center">
                  <div className='uppercase  text-[35px] font-JosefinSans mb-0 pb-0 pt-2 mobile:text-[20px] pad:text-[28px] select-none'>
                    {/* {name} */}
                    scooo
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
                         'text-slate-500 navfunc uppercase text-[30px] font-thin pad:text-[25px]'
                      )}
                      // aria-current={item.current ? 'page' : undefined}
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




          <Disclosure.Panel className="absolute lgmin:hidden">
            <div className="w-screen  space-y-3 h-[200px] z-auto bg-stone-50  navmap ">
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

  )
}
