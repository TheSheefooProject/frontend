import styles from './sidebar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiCog } from 'react-icons/bi'
import { CgLogOut, CgMail, CgProfile, CgOptions } from 'react-icons/cg'

const Sidebar = (props: {}) => {
  const { ...restProps } = props
  const [sidebar_visible, setSidebarVisible] = useState<boolean>()

  return (
    <div className={`${sidebar_visible ? 'w-20' : 'w-0'}` + ' md:w-20'}>
      {/* Hamburger Menu Button */}
      <button
        className={
          `${sidebar_visible ? 'left-20' : 'left-0'}` +
          ' absolute ml-1 h-12 w-12 text-primary md:hidden'
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
          '  h-[100%] w-20 flex-col items-center bg-[#80402c] py-2 md:flex md:w-20'
        }
      >
        <button className="drop-shadow-lg">
          <Image src="/logo.svg" width={64} height={64}></Image>
        </button>
        <button className=" relative drop-shadow-lg hover:top-[1px] hover:drop-shadow-none">
          <CgMail size="4em" className="text-brand"></CgMail>
        </button>

        {/* Free space */}

        <button className=" relative mt-auto justify-self-end drop-shadow-lg hover:top-[1px] hover:drop-shadow-none">
          <CgProfile size="4em" className="text-brand"></CgProfile>
        </button>
        <button className=" relative justify-self-end drop-shadow-lg hover:top-[1px] hover:drop-shadow-none">
          <BiCog size="4em" className="text-brand"></BiCog>
        </button>
        <button className=" relative justify-self-end drop-shadow-lg hover:top-[1px] hover:drop-shadow-none">
          <CgLogOut size="4em" className="text-brand"></CgLogOut>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
