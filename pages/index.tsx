import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  const showModal = () => {
    console.log('among us')
  }
  return (
    <main className=" flex min-h-screen w-[100%] flex-row items-stretch overflow-x-hidden bg-back_2 ">
      <Head>
        <title>Sheefoo</title>
      </Head>
      {/* Main Container */}
      <div className="relative mx-2 my-2 mt-12 flex w-[100%] flex-col rounded-md bg-back_3 px-2 md:mx-4 md:my-4">
        <div className="flex-1"></div>
        {/* <div className="absolute bottom-0 left-0 h-20 w-20 flex-1 bg-black"></div> */}
        {/* Text input box */}
        <span
          role="textbox"
          contentEditable
          className="absolute bottom-0 mb-2 max-h-[30vh] w-[100%] overflow-y-scroll break-words rounded-md bg-back_4 px-3 py-2 focus:outline-none focus:ring focus:ring-back_2"
          style={{ width: 'calc(100% - 1rem)' }}
          onFocus={() => showModal()}
        ></span>
      </div>
    </main>
  )
}

export default Home
