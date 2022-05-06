import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import Button from '../components/common/Button'
import TextArea from '../components/common/TextArea'
import TextBox from '../components/common/TextBox'

import { FiEdit } from 'react-icons/fi'
import { get_user_details_api } from '../helpers/api_helper'

const Profile = (props: { localStorage: Storage }) => {
  const { localStorage, ...restProps } = props

  interface IDetails {
    username: string
    email: string
    avatar: string
    biography?: string
  }
  const defaultDetails = {
    username: 'Default',
    email: 'Default',
    avatar: '/images/default_profile_image.webp',
    biography: 'Default',
  }
  const [details, setDetails] = useState<IDetails>(defaultDetails)

  useEffect(() => {
    try {
      // let lsDetails = JSON.parse(localStorage.userDetails)
      // setDetails({
      //   username: lsDetails.username,
      //   email: lsDetails.email,
      //   avatar: '',
      //   biography: 'default_biography',
      // })
    } catch (e) {}
  }, [localStorage])

  useEffect(() => {
    getUserDetails()
  }, [])

  const getUserDetails = async () => {
    let userDetails = await get_user_details_api()
    setDetails({
      username: userDetails.userData.username,
      email: userDetails.userData.email,
      avatar: userDetails.userData.profile_pic_url,
      biography: userDetails.user_bio,
    })
    console.log(details)
  }
  return (
    <main className="static flex min-h-screen w-[100%] min-w-[320px] flex-col items-center justify-between overflow-x-hidden bg-back_3 px-10 pt-12 text-text_1 md:pl-[calc(1vw+10rem)] md:pr-[calc(1vw+5rem)]">
      {/* Profile Container */}
      <div className="lg:mx-1/2 mb-4 flex min-w-[50vw] max-w-[80vw] flex-col items-center justify-between rounded-lg border-0 bg-back_2 p-6 font-body sm:mx-0 md:mb-0 md:min-w-[600px] md:flex-row md:border-2">
        <div
          id="userimage"
          className="group relative h-[8rem] min-h-[8rem] w-[8rem] min-w-[8rem] basis-4 cursor-pointer overflow-hidden rounded-md border-2 border-back_4 hover:brightness-75 md:mr-8"
        >
          <Image src={details.avatar} layout="fill" objectFit="cover"></Image>
          <FiEdit className="absolute left-2 bottom-2 hidden h-12 w-12 text-white group-hover:inline"></FiEdit>
        </div>
        <div id="userinfo" className="relative w-full">
          <form method="post">
            <ul>
              <li className=" mb-2 inline-flex w-full flex-col gap-1">
                <label>Username </label>
                <TextBox
                  controlledInput={false}
                  type="text"
                  placeholder={details.username}
                  name="username"
                ></TextBox>
              </li>
              <li>
                <Button
                  noMargin
                  text="Save Changes"
                  type="positive"
                  className="mb-2"
                  onClick={() => {}}
                ></Button>
              </li>
              <div className="h-0.5 w-full bg-accent_2 opacity-50"></div>

              {/* Change User Settings Container */}
              <div className="mb-0 mt-1 flex flex-col">
                <div className="flex flex-col items-center md:flex-row">
                  <Button text="Change E-Mail" type="neutral"></Button>
                  <Button text="Change Password" type="neutral"></Button>
                </div>
                <div className="flex flex-col items-center md:flex-row">
                  <Button text="Delete Account" type="negative"></Button>
                </div>
              </div>
            </ul>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Profile
