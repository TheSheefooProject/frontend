import styles from './sidebar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiSettings, FiUser, FiLogOut, FiMessageSquare } from 'react-icons/fi'
import Tooltip from '../Tooltip'

const Sidebar = (props: {}) => {
  const { ...restProps } = props
  const [sidebar_visible, setSidebarVisible] = useState<boolean>()

  return (
    <>
      <div
        className={
          `${sidebar_visible ? 'w-20' : 'w-0'}` +
          ' fixed left-0 top-0 z-50 h-[100vh] md:w-20'
        }
      >
        {/* Hamburger Menu Button */}
        <button
          className={
            `${sidebar_visible ? 'left-20' : 'left-0'}` +
            ' absolute z-50 ml-1 h-12 w-12 text-text_1 md:hidden'
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
            `${
              (styles.sidebar, sidebar_visible ? 'flex w-20' : 'hidden w-0')
            }` +
            '   h-[100%] w-20 flex-col items-center bg-back_1 py-2 text-accent_1 md:flex md:w-20'
          }
        >
          <Link href="/">
            <a className="relative drop-shadow-lg hover:top-[1px] hover:drop-shadow-none">
              <Image src="/logo.svg" width={64} height={64}></Image>
            </a>
          </Link>
          <button className=" has-tooltip relative mt-5 drop-shadow-lg hover:top-[1px] hover:cursor-pointer hover:text-accent_2 hover:drop-shadow-none">
            <FiMessageSquare size="3.5em"></FiMessageSquare>
            <Tooltip text="Messages" side="right"></Tooltip>
          </button>

          {/* Free space */}

          <Link href="/profile">
            <div className=" has-tooltip relative mt-auto justify-self-end drop-shadow-lg hover:top-[1px] hover:cursor-pointer hover:text-accent_2 hover:drop-shadow-none">
              <FiUser size="3.5em"></FiUser>
              <Tooltip text="Profile" side="right"></Tooltip>
            </div>
          </Link>
          <Link href="/settings">
            <div className=" has-tooltip relative mt-5 justify-self-end drop-shadow-lg hover:top-[1px] hover:cursor-pointer hover:text-accent_2 hover:drop-shadow-none">
              <FiSettings size="3.5em"></FiSettings>
              <Tooltip text="Settings" side="right"></Tooltip>
            </div>
          </Link>
          <button className=" has-tooltip relative mt-5 justify-self-end drop-shadow-lg hover:top-[1px] hover:cursor-pointer hover:text-accent_2 hover:drop-shadow-none">
            <FiLogOut size="3.5em"></FiLogOut>
            <Tooltip text="Log Out" side="right"></Tooltip>
          </button>
        </div>
      </div>
      <div
        className={
          `${sidebar_visible ? 'visible' : 'hidden'}` +
          ' fixed top-0 left-0 h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.8)] bg-blend-darken  md:hidden'
        }
      ></div>
    </>
  )
}

export default Sidebar
