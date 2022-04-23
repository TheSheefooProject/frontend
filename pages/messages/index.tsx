import { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { FiPlus, FiSend } from 'react-icons/fi'
import TextBox from '../../components/common/TextBox'
import DMFragment from './DMFragment'

const DirectMessagesPage: NextPage = () => {
  const [numberOfActiveDMs, setNumberOfActiveDMs] = useState(4)

  return (
    <main className="flex min-h-screen w-[100%] flex-col items-stretch bg-back_2 py-2 pl-2 pr-2 md:pl-24 md:pr-4 md:pt-4">
      {/* Direct Message user bubbles */}
      <div className="relative flex h-20 w-full flex-row justify-end gap-3">
        {[...Array(numberOfActiveDMs)].map(
          (value: undefined, index: number) => (
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-3xl border-2 border-text_1 transition-all hover:translate-y-1 hover:cursor-pointer hover:rounded-md md:h-16 md:w-16">
              <Image
                src={'https://picsum.photos/seed/' + index + 1 + '/200'}
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          )
        )}
        <div
          className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-3xl border-2 border-text_1 hover:cursor-pointer md:h-16 md:w-16"
          title="Start new conversation"
        >
          <FiPlus size={46}></FiPlus>
        </div>
      </div>
      {/* Direct Message Embed Fragment */}
      <div className="b-2 mb-12 h-full w-full overflow-y-auto rounded-md bg-back_3">
        <DMFragment></DMFragment>
        <div className="fixed bottom-0 left-0 flex w-full items-center border-t-2 border-back_1 bg-back_3 p-2">
          <TextBox
            name="msgInput"
            type="text"
            className="ml-auto w-3/4"
          ></TextBox>
          <FiSend
            title="Send Message"
            className=" mr-auto ml-4 text-accent_2 hover:cursor-pointer"
            size={32}
          ></FiSend>
        </div>
      </div>
    </main>
  )
}

export default DirectMessagesPage
