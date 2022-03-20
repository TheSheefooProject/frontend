import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/common/Button'

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

        <div
          id="modal_container"
          className="flex h-[100%] flex-col justify-between"
        >
          {/* Modal (shown when input is focused) */}
          <div className={`${modal_showing ? ' visible' : 'hidden'}`}>
            {/* Uploaded Image */}
            <div
              id="image_container"
              className="m-auto mt-2 mb-auto rounded-md bg-back_4 p-2"
            >
              <Image src="/logo.svg" width={500} height={500}></Image>
            </div>

            {/* Grid inside modal */}
            <div
              className={
                ' mb-2 grid  w-[100%] grid-cols-2 items-end rounded-md text-text_1'
              }
            >
              {' '}
              <Button
                type="neutral"
                text="ADD IMAGE"
                className="ml-1 mb-2 justify-self-start"
              ></Button>
              <div id="tags_container" className="mr-1 mb-2 justify-self-end">
                <input type="text" placeholder="Add Tag"></input>
              </div>
            </div>
          </div>
          {/* Text input box */}
          <span
            role="textbox"
            contentEditable
            className=" bottom-0 mb-2 max-h-[30vh] w-[100%] overflow-y-scroll break-words rounded-md bg-back_4 px-3 py-2 focus:outline-none focus:ring focus:ring-back_2"
            onFocus={() => showModal(true)}
            // onBlur={() => showModal(false)}
          ></span>
        </div>
      </div>
    </main>
  )
}

export default Home
