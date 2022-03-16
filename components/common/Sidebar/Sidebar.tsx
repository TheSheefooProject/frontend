import styles from './sidebar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

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
          '  h-[100%] w-20 flex-col bg-brand md:flex md:w-20'
        }
      >
        <button className="mt-2">
          <Image src="/logo.svg" width={64} height={64}></Image>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
