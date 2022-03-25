import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import TextArea from '../components/common/TextArea'
import TextBox from '../components/common/TextBox'

const Profile: NextPage = () => {
  return (
    <main className="md:[5vw] static min-h-screen w-[100%] min-w-[320px] overflow-x-hidden bg-back_3 px-10 pt-12 text-text_1 md:px-[calc(20vw+5rem)]">
      <div className="flex flex-col font-body md:flex-row">
        <div
          id="userimage"
          className="mr-10 h-64 w-64 overflow-hidden rounded-full"
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
            </ul>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Profile
