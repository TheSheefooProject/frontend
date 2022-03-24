import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/common/Button'
import TextBox from '../components/common/TextBox'

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
        {/* Homescreen Feed */}
        <div
          className={
            `${
              modal_showing
                ? ' blur brightness-[.25]'
                : ' blur-0 brightness-100'
            }` + ' flex-1 transition-all'
          }
        >
          {/* //!FEED GOES HERE */}
        </div>
        <div
          id="modal_container"
          className="z-10 flex h-[100%] flex-col justify-between"
        >
          {/* Modal (shown when input is focused) */}
          <div
            className={
              `${
                modal_showing
                  ? ' opacity-1 pointer-events-auto'
                  : ' pointer-events-none opacity-0'
              }` +
              '  mt-auto flex flex-col-reverse items-center transition-opacity md:flex-row md:items-end'
            }
          >
            {/* Upload Image GRID */}
            <div className=" mb-3 flex w-[100%] flex-col md:w-[auto]">
              {/* Uploaded Image */}
              <div
                id="image_container"
                className="m-auto mt-2 mb-2 flex w-[100%] items-center justify-center rounded-md bg-back_4 p-2"
              >
                <Image src="/logo.svg" width={200} height={200}></Image>
              </div>
              <Button
                type="neutral"
                text="ADD IMAGE"
                className="justify-self-start"
                noMargin
              ></Button>
            </div>

            {/* Tags GRID */}
            <div
              className={
                'mb-0 flex w-[100%] flex-col-reverse items-end rounded-md text-text_1 md:mb-3 '
              }
            >
              <div
                className="relative w-[100%] md:w-48"
                id="tag_input_container"
              >
                <input
                  type="text"
                  placeholder="Add Tag"
                  className=" mt-1 h-8 w-[100%] rounded-md bg-back_4 px-4 text-text_1 placeholder:text-text_1 focus:outline-none focus:ring focus:ring-back_2 md:w-48"
                ></input>
                <Button
                  iconOnly
                  noMargin
                  type="positive"
                  fixedWidth
                  icon="+"
                  className="absolute right-0 bottom-0"
                ></Button>
              </div>

              <div className="flex flex-col-reverse items-end " id="tags">
                <span className="my-1 inline-block w-48 overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg bg-back_2 py-0.5 px-3 hover:cursor-pointer hover:bg-accent_2 hover:first-letter:text-black">
                  <span className="text-accent_1">◈</span> Example Tag 1
                </span>
                <span className="my-1 inline-block w-48 overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg bg-back_2 py-0.5 px-3 hover:cursor-pointer hover:bg-accent_2 hover:first-letter:text-black">
                  <span className="text-accent_1">◈</span> Example Tag 2 with a
                  long name
                </span>
                <span className="my-1 inline-block w-48 overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg bg-back_2 py-0.5 px-3  hover:cursor-pointer hover:bg-accent_2 hover:first-letter:text-black">
                  <span className="text-accent_1">◈</span> Example Tag 3. It is
                  polite.
                </span>
              </div>
            </div>
          </div>
          {/* Text input box */}
          <div
            id="text_input_container"
            className={
              `${modal_showing ? ' mt-0' : 'mt-auto'}` +
              ' relative bottom-0 max-h-[30vh] w-[100%]'
            }
          >
            <div
              role="textbox"
              contentEditable
              className=" mb-2 max-h-[28vh] w-[100%] overflow-y-auto break-all rounded-md bg-back_4 py-2 pr-[165px] pl-3  text-text_1 focus:outline-none focus:ring focus:ring-back_2"
              onFocus={() => showModal(true)}
              // onBlur={() => showModal(false)}
            ></div>
            <div
              id="action_buttons_container"
              className="absolute right-0 bottom-2 rounded-md bg-back_3 px-0.5 py-1 "
            >
              <Button
                noMargin
                type="positive"
                fixedWidth
                text="Submit Post"
                className="mx-0.5"
                onClick={() => {
                  alert('🪴 Post Submitted 🏵️')
                }}
              ></Button>
              <Button
                noMargin
                type="negative"
                fixedWidth
                icon="x"
                iconOnly
                className="mx-0.5"
                onClick={() => {
                  alert('⚠️ Are you sure you wish to cancel your post? ⚠️')
                }}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
