import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import io from 'socket.io-client'

export interface Props {
  messages: Array<any>
  roomName: string
  loading: boolean
}

type MessageObject = {
  user_name: string
  message: string
  id: string
  type: 'INCOMING' | 'OUTGOING'
}

const DMFragment: NextPage<Props> = (props) => {
  const { messages, loading, roomName } = props

  return (
    <>
      <p className="sticky top-0 pt-4 text-center font-heading text-xl">
        Now talking to {roomName}
      </p>
      <div id="messages_container" className="flex flex-col p-2 md:p-4">
        {loading ? (
          <Image
            src="/images/loading.gif" //TODO note this is a temp image, plz change
            width={400}
            height={600}
          ></Image>
        ) : (
          <div className="flex flex-col gap-1">
            {messages.map(function (message: MessageObject, idx) {
              console.log(message)

              if (message.type == 'INCOMING') {
                return (
                  <p
                    itemType="incoming"
                    className="self-end"
                    id={message.id + idx}
                  >
                    <div className="w-fit rounded-lg rounded-br-none bg-accent_1 px-4 py-2 text-black">
                      {message.message}
                    </div>
                  </p>
                )
              }
              return (
                <p itemType="outgoing" className="" id={message.id + idx}>
                  <div className=" w-fit rounded-lg rounded-bl-none bg-back_4 px-4 py-2">
                    {message.message}
                  </div>
                </p>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default DMFragment
