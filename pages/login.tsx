import type { NextPage } from 'next'
import Image from 'next/image'
import Button from '../components/common/Button'

import { general_api, login_api } from '../helpers/api_helper'

const Login: NextPage = () => {
  return (
    <main className="static flex min-h-screen w-[100%] flex-col justify-between overflow-x-hidden bg-back_3 px-10 pt-12 text-text_1 md:min-w-[320px]  md:px-[calc(25vw+5rem)]">
      {/* Profile Container */}
      <div className="flex flex-col items-center justify-between self-center font-body md:flex-row">
        <div
          id="loginlogo"
          className="mb-10 h-48 w-48 overflow-hidden md:mr-10 md:mb-0"
        >
          <Image src="/logo.svg" width={500} height={500}></Image>
        </div>
        <div className="self-center rounded border-0 bg-back_1 p-6">
          <ul>
            <li className="flex flex-col gap-1 md:w-96">
              <label>Username </label>
              <input
                className="rounded bg-back_4"
                type="text"
                name="username"
                required
              />
            </li>
            <li className="mt-3 flex flex-col gap-1">
              <label>Password </label>
              <input
                className="rounded bg-back_4"
                type="password"
                name="password"
                required
              />
            </li>
            <li className="mt-4 flex flex-col gap-1">
              <Button
                noMargin
                text="Login"
                type="neutral"
                className="mb-5 md:mb-0"
                onClick = {async (e:any)=>{
                  e.preventDefault();
                  //TODO this function should set the access and refresh tokens
                  // UI update needs to be done so that if it fails then update the ui to have errors
                  //Also code to get the user input instead of hard coded values is needed
                  const statusObj = await login_api('jeesonjohnson100@gmail.com','AASDADASDasdad12313');
                  if(statusObj=='success'){
                    //code to redict the user into the loged in page...
                  }else{
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
