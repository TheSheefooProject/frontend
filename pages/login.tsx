import type { NextPage } from 'next'
import Image from 'next/image'
import { SetStateAction, useState } from 'react'
import Button from '../components/common/Button'
import TextBox from '../components/common/TextBox'
import { useRouter } from 'next/router'

import { general_api, login_api } from '../helpers/api_helper'
import Link from 'next/link'

const Login: NextPage = () => {
  const router = useRouter()

  const [inEmail, setInEmail] = useState('')
  const [inPassword, setInPassword] = useState('')

  return (
    <main className="static flex min-h-screen w-[100%] flex-col justify-center overflow-x-hidden bg-back_3 px-10 pt-0 text-text_1 md:px-[25vw]">
      {/* Profile Container */}
      <div className="flex min-w-max flex-col items-center font-body md:flex-row">
        <div id="loginlogo" className="m-3 h-48 w-48 drop-shadow-xl">
          <Image src="/logo.svg" width={200} height={200}></Image>
        </div>
        <div className="self-center rounded border-0 bg-back_1 p-6 drop-shadow-xl">
          <h1 className="mb-6 text-center font-heading text-4xl">Login</h1>

          <ul className="flex flex-col gap-3">
            <li className="flex flex-col gap-1">
              <TextBox
                placeholder="E-Mail or Username"
                required
                type="text"
                name="email"
                onChange={(e: {
                  target: { value: SetStateAction<string> }
                }) => {
                  setInEmail(e.target.value)
                }}
              ></TextBox>
            </li>
            <li className="flex flex-col gap-1">
              <TextBox
                placeholder="Password"
                required
                type="password"
                name="password"
                onChange={(e: {
                  target: { value: SetStateAction<string> }
                }) => {
                  setInPassword(e.target.value)
                }}
              ></TextBox>
            </li>
            <li className="flex justify-between gap-1 text-blue-500 underline">
              <Link href="">Forgot Password?</Link>
              <Link href="/register">Sign Up</Link>
            </li>
            <li className="mt-2 flex flex-col gap-1">
              <Button
                noMargin
                text="Login"
                type="positive"
                className=" md:mb-0"
                onClick={async (e: any) => {
                  e.preventDefault()
                  //TODO this function should set the access and refresh tokens
                  // UI update needs to be done so that if it fails then update the ui to have errors
                  //Also code to get the user input instead of hard coded values is needed
                  let inputValues = []
                  if (inEmail == '' && inPassword == '') {
                    // Default values if fields are left empty (DEBUGGING ONLY)
                    inputValues = [
                      'jeesonjohnson100@gmail.com',
                      'AASDADASDasdad12313',
                    ]
                  } else {
                    inputValues = [inEmail, inPassword]
                  }
                  const statusObj = await login_api(
                    inputValues[0],
                    inputValues[1]
                  )
                  console.log(inEmail, inPassword)

                  if (statusObj == 'success') {
                    router.push('/')
                    //code to redict the user into the logged in page...
                  } else {
                    alert(
                      "The details you entered don't match an existing account."
                    )
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

export default Login
