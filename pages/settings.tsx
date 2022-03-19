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

const SettingsPage = (props: { is_dark: boolean; setDark: Function }) => {
  // Default prop values
  const { is_dark = false, setDark = null, ...restProps } = props

  return (
    <main className="md:[5vw] static min-h-screen w-[100%] min-w-[320px] overflow-x-hidden bg-neutral px-10 pt-12 md:px-[20vw] ">
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
            onClick={() => props.setDark(!is_dark)}
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
    </main>
  )
}

export default SettingsPage
