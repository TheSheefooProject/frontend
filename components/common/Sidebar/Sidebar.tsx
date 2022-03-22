import styles from './sidebar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiSettings, FiUser, FiLogOut, FiMessageSquare } from 'react-icons/fi'

const Sidebar = (props: {}) => {
  const { ...restProps } = props
  const [sidebar_visible, setSidebarVisible] = useState<boolean>()

  return (
    <div className={`${sidebar_visible ? 'w-20' : 'w-0'}` + ' md:w-20'}>
      {/* Hamburger Menu Button */}
      <button
        className={
          `${sidebar_visible ? 'left-20' : 'left-0'}` +
          ' absolute ml-1 h-12 w-12 text-text_1 md:hidden'
        }
        onClick={() => setSidebarVisible(!sidebar_visible)}
      >
        <GiHamburgerMenu
          size="3em"
          className=" absolute top-0 "
        ></GiHamburgerMenu>
      </button>

      {/* Sidebar */}
      <div
        className={
          `${(styles.sidebar, sidebar_visible ? 'flex w-20' : 'hidden w-0')}` +
          '  h-[100%] w-20 flex-col items-center bg-back_1 py-2 text-accent_1 md:flex md:w-20'
        }
      >
        <Link href="/">
          <a className="relative drop-shadow-lg hover:top-[1px] hover:drop-shadow-none">
            <Image src="/logo.svg" width={64} height={64}></Image>
          </a>
        </Link>
        <button className=" relative mt-5 drop-shadow-lg hover:top-[1px] hover:cursor-pointer hover:text-accent_2 hover:drop-shadow-none">
          <FiMessageSquare size="3.5em"></FiMessageSquare>
        </button>

        {/* Free space */}

        <button className=" relative mt-auto justify-self-end drop-shadow-lg hover:top-[1px] hover:cursor-pointer hover:text-accent_2 hover:drop-shadow-none">
          <FiUser size="3.5em"></FiUser>
        </button>
        <Link href="/settings">
          <a>
            <FiSettings
              size="3.5em"
              className="relative mt-5 justify-self-end drop-shadow-lg  hover:top-[1px] hover:cursor-pointer hover:text-accent_2 hover:drop-shadow-none"
            ></FiSettings>
          </a>
        </Link>
        <button className=" relative mt-5 justify-self-end drop-shadow-lg hover:top-[1px] hover:cursor-pointer hover:text-accent_2 hover:drop-shadow-none">
          <FiLogOut size="3.5em"></FiLogOut>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
