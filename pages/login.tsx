import type { NextPage } from 'next'
import Image from 'next/image'
import Button from '../components/common/Button'
import TextBox from '../components/common/TextBox'

import { general_api, login_api } from '../helpers/api_helper'

const Login: NextPage = () => {
  return (
    <main className="static flex min-h-screen w-[100%] flex-col justify-between overflow-x-hidden bg-back_3 px-10 pt-12 text-text_1 md:px-[25vw]">
      {/* Profile Container */}
      <div className="flex min-w-max flex-col items-center font-body md:flex-row">
        <div id="loginlogo" className="m-3 h-48 w-48 drop-shadow-xl">
          <Image src="/logo.svg" width={200} height={200}></Image>
        </div>
        <div className="self-center rounded border-0 bg-back_1 p-6 drop-shadow-xl">
          <ul className="flex flex-col gap-3">
            <li className="flex flex-col gap-1">
              <TextBox
                placeholder="E-Mail Address"
                required
                name="email"
              ></TextBox>
            </li>
            <li className="flex flex-col gap-1">
              <TextBox
                placeholder="Password"
                required
                name="password"
              ></TextBox>
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
                  const statusObj = await login_api(
                    'jeesonjohnson100@gmail.com',
                    'AASDADASDasdad12313'
                  )
                  if (statusObj == 'success') {
                    //code to redict the user into the loged in page...
                    console.log(statusObj)
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

export default Login
