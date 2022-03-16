import styles from './sidebar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'

const Sidebar = (props) => {
    const {
        ...restProps
    } = props;

    return (
        <div className="absolute ">
            <GiHamburgerMenu size="3em" className="text-primary md:hidden relative left-2"></GiHamburgerMenu>
            <div className={`${styles.sidebar}` + ' md:flex flex-col w-32 h-[100%] bg-secondary fixed hidden'}>

                <Image src="/logo.svg" width={48} height={48}></Image>

            </div>
        </div>
    )
}

export default Sidebar;