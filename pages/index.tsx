import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  const [modal_showing, setModalShowing] = useState<boolean>()

  const showModal = (val: boolean) => {
    if (val === true) {
      setModalShowing(true)
    }
    if (val === false) {
      setModalShowing(false)
    }
  }
  return (
    <main className=" flex min-h-screen w-[100%] flex-row items-stretch overflow-x-hidden bg-back_2 ">
      <Head>
        <title>Sheefoo</title>
      </Head>
      {/* Main Container */}
      <div className="relative mx-2 my-2 mt-12 flex w-[100%] flex-col rounded-md bg-back_3 px-2 md:mx-4 md:my-4">
        <div className="flex-1"></div>

        {/* Modal (shown when input is focused) */}
        <div
          className={
            `${modal_showing ? ' visible' : 'hidden'}` +
            ' absolute bottom-14 left-2 h-20 w-20 flex-1 rounded-md bg-black text-text_1'
          }
          style={{ width: 'calc(100% - 1rem)' }}
        >
          {' '}
          MODAL
        </div>

        {/* Text input box */}
        <span
          role="textbox"
          contentEditable
          className="absolute bottom-0 mb-2 max-h-[30vh] w-[100%] overflow-y-scroll break-words rounded-md bg-back_4 px-3 py-2 focus:outline-none focus:ring focus:ring-back_2"
          style={{ width: 'calc(100% - 1rem)' }}
          onFocus={() => showModal(true)}
          onBlur={() => showModal(false)}
        ></span>
      </div>
    </main>
  )
}

export default Home
