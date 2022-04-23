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
} from '../helpers/api_helper'
import Tooltip from '../components/common/Tooltip'

const Register: NextPage = () => {
  const [inUsername, setInUsername] = useState('')
  const [inPassword, setInPassword] = useState('')
  const [inEmail, setInEmail] = useState('')
  const [inFullName, setInFullName] = useState('')
  const [userNameTaken, setUserNameTaken] = useState<boolean>(false)
  return (
    <main className="static flex min-h-screen w-[100%] flex-col justify-center overflow-x-hidden bg-back_3 px-10 pt-0 text-text_1 md:min-w-[320px]  md:px-[25vw]">
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
              ></TextBox>
            </li>
            <li className="flex flex-col gap-1">
              <TextBox
                placeholder="Full Name"
                required
                type="text"
                name="fullName"
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
                  setUserNameTaken(await check_username_api(e.target.value))
                  console.log(userNameTaken)
                }}
              ></TextBox>
              <div className=" absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2">
                <FiCheckCircle
                  size={20}
                  title="Username available"
                  className={`${
                    userNameTaken ? 'hidden' : 'visible text-green-400'
                  }`}
                ></FiCheckCircle>
                <FiXCircle
                  title="Username unavailable"
                  size={20}
                  className={`${
                    userNameTaken ? 'visible text-red-400' : 'hidden'
                  }`}
                ></FiXCircle>
              </div>
            </li>
            <li className="flex flex-col gap-1">
              <TextBox
                placeholder="Password"
                required
                type="password"
                name="password"
              ></TextBox>
            </li>

            <li className="mt-2 flex flex-col gap-1">
              <Button
                noMargin
                text="Register"
                type="positive"
                className=" md:mb-0"
                onClick={async (e: any) => {
                  e.preventDefault()
                  //TODO this function should set the access and refresh tokens
                  // UI update needs to be done so that if it fails then update the ui to have errors
                  //Also code to get the user input instead of hard coded values is needed
                  const statusObj = await login_api(
                    'jeesonjohnson100@gmail.com',
                    'AASDADASDasdad12313'
                  )
                  if (statusObj == 'success') {
                    //code to redict the user into the loged in page...
                  } else {
                    //code to show the user that their value as not worked
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
