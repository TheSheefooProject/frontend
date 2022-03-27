import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import Button from '../components/common/Button'
import TextArea from '../components/common/TextArea'
import TextBox from '../components/common/TextBox'

const Profile: NextPage = () => {
  return (
    <main className="static flex min-h-screen w-[100%] min-w-[320px] flex-col justify-between overflow-x-hidden bg-back_3 px-10 pt-12 text-text_1  md:px-[calc(25vw+5rem)]">
      {/* Profile Container */}
      <div className="flex flex-col justify-between font-body md:flex-row">
        <div
          id="userimage"
          className="mr-10 h-64 w-64 overflow-hidden rounded-full border-4 border-back_1"
        >
          <Image
            src="/images/thispersondoesnotexist.jpg"
            width={500}
            height={500}
          ></Image>
        </div>
        <div id="userinfo">
          <form method="post">
            <ul>
              <li className="flex flex-col gap-1">
                <label>Username </label>
                <TextBox placeholder="(Current Username)"></TextBox>
              </li>
              <li className="mt-4 flex flex-col gap-1">
                <label>About Me </label>
                <TextArea text="(Current Biography)"></TextArea>
              </li>
              <li>
                <Button
                  noMargin
                  text="Save Changes"
                  type="positive"
                  className="mb-5 md:mb-0"
                ></Button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      {/* Change User Settings Container */}
      <div className="mb-10 flex flex-col">
        <div className="flex flex-col items-center md:flex-row">
          <Button text="Change E-Mail" type="neutral"></Button>
          <Button text="Change Password" type="neutral"></Button>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <Button text="Permanently Delete Account" type="negative"></Button>
        </div>
      </div>
    </main>
  )
}

export default Profile
