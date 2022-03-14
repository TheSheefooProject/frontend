import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/common/Button'
import Switch from '../components/common/Switch'

const SettingsPage: NextPage = () => {
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
          <div className="flex flex-row justify-between">
            <h2 className="text-xl text-primary">Dark Theme</h2>
            <Switch></Switch>
          </div>
        </form>
      </div>
    </main>
  )
}

export default SettingsPage
