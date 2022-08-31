import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import { RiBilibiliFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons";
function Footer() {
  return (
    <>
      {/* grid mobile:grid-cols-1 pad:grid-cols-2  grid-cols-3 gap-3 */}
      <footer className='bg-black mt-12 text-white py-[40px]'>
        <div className='max-w-[1000px]  mx-auto px-7 justify-between flex sm:block sm:text-center'>

          <p>© 2022. All rights reserved by scooo.</p>
          <ul className='flex space-x-5 sm:justify-center sm:pt-3'>
            <li>

              <a href="https://github.com/scooomaker">
                <IconContext.Provider value={{size: '1.8em'}}>
                  <VscGithubInverted/>
                </IconContext.Provider>
              </a>

            </li>

            <li>
              <a href="https://space.bilibili.com/353271021">
                <IconContext.Provider value={{size: '1.8em'}}>
                  <RiBilibiliFill/>
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href="mailto:scooomaker@foxmail.com">
                <IconContext.Provider value={{size: '1.8em'}}>
                  <AiOutlineMail/>
                </IconContext.Provider>
              </a>
            </li>
          </ul>

        </div>
      </footer>

    </>
  )
}

export default Footer