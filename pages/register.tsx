import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../components/common/Button'
import TextBox from '../components/common/TextBox'
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'

import {
  general_api,
  login_api,
  check_username_api,
  register_api,
} from '../helpers/api_helper'
import Tooltip from '../components/common/Tooltip'
import Link from 'next/link'

const Register: NextPage = () => {
  const [inUsername, setInUsername] = useState('')
  const [inPassword, setInPassword] = useState('')
  const [inEmail, setInEmail] = useState('')
  const [inFullName, setInFullName] = useState('')
  const [userNameTaken, setUserNameTaken] = useState<boolean>(false)
  const [userNameFieldChanged, setuserNameFieldChanged] =
    useState<boolean>(false)
  return (
    <main className="static flex min-h-screen w-[100%] flex-col items-center justify-center overflow-x-hidden bg-back_3 px-10 pt-0 text-text_1  md:min-w-[320px] md:px-[25vw]">
      {/* Profile Container */}
      <div className="flex min-w-max flex-col items-center font-body md:flex-row">
        <div id="loginlogo" className="m-3 h-48 w-48 drop-shadow-xl">
          <Image src="/logo.svg" width={200} height={200}></Image>
        </div>

        <div className="self-center rounded border-0 bg-back_1 p-6 drop-shadow-xl">
          <h1 className="mb-6 text-center font-heading text-4xl">Register</h1>
          <ul className="flex flex-col gap-3">
            <li className="flex flex-col gap-1">
              <TextBox
                placeholder="E-Mail Address"
                required
                type="text"
                name="email"
                onChange={(e: any) => {
                  setInEmail(e.target.value)
                }}
              ></TextBox>
            </li>
            <li className="flex flex-col gap-1">
              <TextBox
                placeholder="Full Name"
                required
                type="text"
                name="fullName"
                onChange={(e: any) => {
                  setInFullName(e.target.value)
                }}
              ></TextBox>
            </li>
            <li className=" relative flex flex-col gap-1">
              <TextBox
                placeholder="Username"
                required
                type="text"
                name="username"
                onChange={async (e: any) => {
                  e.preventDefault()
                  setuserNameFieldChanged(true)
                  setInUsername(e.target.value)
                  setUserNameTaken(await check_username_api(e.target.value))
                }}
              ></TextBox>
              <div
                className={
                  `${userNameFieldChanged ? 'visible' : 'hidden'}` +
                  ' absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2'
                }
              >
                <FiCheckCircle
                  size={20}
                  className={
                    `${userNameTaken ? 'opacity-0' : ' opacity-100'}` +
                    ' absolute text-green-400 transition-opacity'
                  }
                ></FiCheckCircle>
                <FiXCircle
                  size={20}
                  className={
                    `${userNameTaken ? 'opacity-100 ' : 'opacity-0'}` +
                    ' absolute text-red-400 transition-opacity'
                  }
                ></FiXCircle>
              </div>
            </li>
            <li className="flex flex-col gap-1">
              <TextBox
                placeholder="Password"
                required
                type="password"
                name="password"
                onChange={(e: any) => {
                  setInPassword(e.target.value)
                }}
              ></TextBox>
            </li>
            <li className="flex justify-between gap-1 text-blue-500 underline">
              <Link href="/login">Log In</Link>
            </li>
            <li className="mt-2 flex flex-col gap-1">
              <Button
                noMargin
                text="Register"
                type="positive"
                className=" md:mb-0"
                onClick={async (e: any) => {
                  e.preventDefault()
                  // Clientside userNameTaken check
                  if (!userNameTaken) {
                    if (
                      inUsername.length >= 3 &&
                      inEmail.length >= 3 &&
                      inPassword.length >= 3 &&
                      inFullName.length >= 3
                    ) {
                      const statusObj = await register_api(
                        inUsername,
                        inEmail,
                        inPassword,
                        // WHEN BACKEND IS CHANGED TO FULL NAME, REMOVE ONE OF THESE
                        inFullName,
                        inFullName
                      )
                      console.log(statusObj)
                    } else {
                      alert('All fields must be at least 3 characters long.')
                    }
                  } else {
                    alert('Username is taken. Please pick another.')
                  }
                }}
              ></Button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Register
