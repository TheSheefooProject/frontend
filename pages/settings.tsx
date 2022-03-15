import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/common/Button'
import Switch from '../components/common/Switch'

let body: HTMLBodyElement | null = null
let localStorage: Storage

const SettingsPage: NextPage = () => {
  const [is_dark, setIsDark] = useState<boolean>()

  // Light/Dark theme switching function
  const setDark = (val: boolean) => {
    console.log('amog')
    if (body != null) {
      // Set Dark
      if (val == true) {
        body.classList.add('theme-dark')
        body.classList.remove('theme-light')
        setIsDark(true)
        localStorage.theme = 'dark'
      }

      //Set Light
      if (val == false) {
        body.classList.add('theme-light')
        body.classList.remove('theme-dark')
        setIsDark(false)
        localStorage.theme = 'light'
      }
    }
  }

  // Is called on rerenders, but not state changes
  useEffect(() => {
    body = document.querySelector('body')
    localStorage = window.localStorage

    if (body != null) {
      body.classList.add('theme-light')
    }
    // If theme saved in LocalStorage is dark, swap client theme
    if (
      body != null &&
      (localStorage.theme === 'dark' || !('theme' in localStorage))
    ) {
      setDark(true)
    }
  }, [])

  return (
    <main>
      <div className="md:[5vw] static min-h-screen bg-neutral px-10 pt-12 md:px-[20vw]  ">
        <Head>
          <title>Sheefoo | Dev Page</title>
        </Head>

        <h1 className=" border-b-2 border-secondary pb-2 text-right font-heading text-4xl text-primary">
          Settings
        </h1>
        <br />
        {/* Settings Container */}
        <form
          id="settings_container"
          className="container mx-auto flex flex-col "
        >
          {/* Dark Theme Toggle */}
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl text-primary">Dark Theme</h2>
            <Switch
              name="setting_theme"
              onClick={() => setDark(!is_dark)}
              initialState={is_dark}
            ></Switch>
          </div>

          {/* Divider */}
          <span className="relative bottom-0 my-4 h-[1px] w-auto bg-primary opacity-20 "></span>
          {/* Reduced Motion Toggle */}
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl text-primary">Reduced Motion</h2>
            <Switch name="setting_motion"></Switch>
          </div>

          {/* Divider */}
          <span className="relative bottom-0 my-4 h-[1px] w-auto bg-primary opacity-20 "></span>
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl text-primary">Lorem Ipsum</h2>
            <Switch name="setting_PLACEHOLDER1"></Switch>
          </div>

          {/* Divider */}
          <span className="relative bottom-0 my-4 h-[1px] w-auto bg-primary opacity-20 "></span>
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl text-primary">Lorem Ipsum</h2>
            <Switch name="setting_PLACEHOLDER2"></Switch>
          </div>

          {/* Divider */}
          <span className="relative bottom-0 my-4 h-[1px] w-auto bg-primary opacity-20 "></span>
          {/* Delete Account Button */}
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl text-primary">Permanently Delete Account</h2>
            <Button
              text="DELETE"
              type="negative"
              onClick={() => alert('☠️ Account Deleted ☠️')}
              noMargin
            ></Button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default SettingsPage
