import type { NextPage } from 'next'
import Head from 'next/head'
import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/common/Button'
import TextBox from '../components/common/TextBox'
import { FiPlus, FiX } from 'react-icons/fi'
import Tag from '../components/common/Tag'
import { get_all_posts, get_user_details_api } from '../helpers/api_helper'

const Home: NextPage = () => {
  const [modal_showing, setModalShowing] = useState<boolean>()
  const [posts, setPosts] = useState([])

  const showModal = (val: boolean) => {
    if (val === true) {
      setModalShowing(true)
    }
    if (val === false) {
      setModalShowing(false)
    }
  }

  useEffect(() => {
    refreshPosts()
  }, [])

  const refreshPosts = async () => {
    await get_all_posts(localStorage?.refresh_token).then((e) => {
      console.log('Post retrieval', e.status)
      setPosts(e.allPosts)
    })
  }
  console.log(posts)

  return (
    <main className=" flex h-screen min-h-screen w-full flex-row items-stretch overflow-x-hidden bg-back_2 md:pl-20">
      <Head>
        <title>Sheefoo</title>
      </Head>
      {/* Main Container */}
      <div className="relative mx-2 my-2 flex h-auto w-full flex-col rounded-md bg-back_3 px-2 md:mx-4 md:my-4">
        {/* Homescreen Feed */}
        <div
          className={
            `${
              modal_showing
                ? ' blur brightness-[.75]'
                : ' blur-0 brightness-100'
            }` +
            ' flex  flex-1 flex-col items-stretch overflow-y-scroll transition-all'
          }
        >
          <div id="feed" className=" flex flex-col  pt-2">
            {posts.map((post: any) => (
              <div key={post._id} className="flex flex-row rounded-md p-2">
                {/* Profile Picture */}
                <div className="relative mr-2 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/images/thispersondoesnotexist.jpg"
                    layout="fill"
                  ></Image>
                </div>
                {/* Post */}
                <div className="w-full rounded-md bg-back_4 p-2">
                  {/* Post Picture */}
                  <div className="relative h-24 w-24 overflow-hidden">
                    <Image
                      src="/images/thispersondoesnotexist.jpg"
                      layout="fill"
                    ></Image>
                  </div>
                  {/* Post Title */}
                  <div>{'Lorem voluptate velit est officia.'}</div>
                </div>
              </div>
            ))}
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
              icon={<FiX></FiX>}
              iconOnly
              className="mx-0.5"
              onClick={() => {
                showModal(false)
                alert('⚠️ Are you sure you wish to cancel your post? ⚠️')
              }}
            ></Button>
          </div>
        </div>
        <div
          id="modal_container"
          className={
            `${
              modal_showing ? ' pointer-events-auto ' : ' pointer-events-none '
            }` +
            ` pointer-events-none absolute flex h-[100%] w-[92%] flex-col justify-between`
          }
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
                className="relative w-[100%] md:w-64"
                id="tag_input_container"
              >
                <input
                  type="text"
                  placeholder="Add Tag"
                  className=" mt-1 h-8 w-[100%] rounded-md bg-back_4 px-4 text-text_1 placeholder:text-text_1 focus:outline-none focus:ring focus:ring-back_2 md:w-64"
                ></input>
                <Button
                  iconOnly
                  noMargin
                  type="positive"
                  fixedWidth
                  icon={<FiPlus></FiPlus>}
                  className="absolute right-0 bottom-0"
                ></Button>
              </div>

              <div className="flex flex-col-reverse items-end " id="tags">
                <span className=" my-1 inline-flex h-7 w-64 flex-row items-center  whitespace-nowrap rounded-md bg-back_2 py-0.5 pr-3 ">
                  <div className="flex h-7 w-7 items-center rounded-l-md px-1 text-accent_1 hover:cursor-pointer hover:bg-red-600">
                    <FiX className="m-auto block"></FiX>
                  </div>
                  <p className="overflow-hidden overflow-ellipsis border-l-2 border-back_3 pl-2">
                    Example Tag 1
                  </p>
                </span>
                <span className=" my-1 inline-flex h-7 w-64 flex-row items-center  whitespace-nowrap rounded-md bg-back_2 py-0.5 pr-3 ">
                  <div className="flex h-7 w-7 items-center rounded-l-md px-1 text-accent_1 hover:cursor-pointer hover:bg-red-600">
                    <FiX className="m-auto block"></FiX>
                  </div>
                  <p className="overflow-hidden overflow-ellipsis border-l-2 border-back_3 pl-2">
                    Example Tag 2 with a long name
                  </p>
                </span>
                <Tag text="Example Tag from Tag component"></Tag>
                <span className=" my-1 inline-flex h-7 w-64 flex-row items-center  whitespace-nowrap rounded-md bg-back_2 py-0.5 pr-3 ">
                  <div className="flex h-7 w-7 items-center rounded-l-md px-1 align-middle text-accent_1 hover:cursor-pointer hover:bg-red-600">
                    <FiX className="m-auto block"></FiX>
                  </div>
                  <p className="overflow-hidden overflow-ellipsis border-l-2 border-back_3 pl-2">
                    Example Tag 3 😳
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
