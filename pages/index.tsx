import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <main className=" flex min-h-screen w-[100%] flex-row items-stretch overflow-x-hidden bg-back_2 ">
      <Head>
        <title>Sheefoo</title>
      </Head>
      {/* Main Container */}
      <div className="relative mx-2 my-2 mt-12 flex w-[100%] flex-col rounded-md bg-back_3 md:mx-4 md:my-4">
        <div className="flex-1"></div>

        <input className="relative mx-2 mb-2 rounded-md bg-back_4 px-3 py-2 focus:outline-none focus:ring focus:ring-back_2"></input>
      </div>
    </main>
  )
}

export default Home
