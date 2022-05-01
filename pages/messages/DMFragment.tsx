import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import io from 'socket.io-client'
import { Z_ASCII } from 'zlib'

export interface Props {
  messages: Array<any>
  loading: boolean
}


type MessageObject = {
  userName:string
  message: string
  id: string
  type: 'INCOMING' | 'OUTGOING'
}
// const socketConnection = io('http://localhost:3005', {
//   transports: ['websocket'],
// })

const DMFragment: NextPage<Props> = (props) => {
  const {messages,loading} = props
  // const { room_name } = props
  // const [loading, setLoading] = React.useState({
  //   state: true,
  //   message: 'Getting previous messages',
  // })
  // const [messages, setMessages] = React.useState([])
  // const [users, setUsers] = React.useState([])

  // const [previousMessages, setPreviousMessages] = React.useState([])
  // React.useEffect(() => {``
  //   socketConnection.on('new-message', (data) => {
  //     console.log('Here is new message',data)
  //   })

  //   const user_id = window.localStorage.user_id;
  //   const user_name = window.localStorage.user_username;
  //   const id = `${user_id}:${Date.now()}`
  //   console.log(user_name,user_id)
  //   //TODO Add stuff about getting previous messages that were said in a group
  //   socketConnection.emit('join', { id,name:user_name,room:room_name, user_id }, (e: any) => {
  //   })

  //   setLoading({ state: false, message: 'Loading completed' })
  //   return () => {
  //     socketConnection.emit('disconnect_user')
  //     socketConnection.off()
  //   }
  // }, [props])

  // React.useEffect(() => {
  //   socketConnection.on('message', (message) => {
  //     // @ts-ignore: Unreachable code error
  //     setMessages((messages) => [...messages, message])
  //   })

  //   socketConnection.on('roomData', ({ users }) => {
  //     setUsers(users)
  //   })
  // }, [])

  return (
    <>
      <p className="pt-4 text-center font-heading text-xl">
        Now talking to {loading}
      </p>
      <div id="messages_container" className="flex flex-col p-2 md:p-4">
        {loading ? (
          <Image
            src="/images/loading.gif" //TODO note this is a temp image, plz change
            width={400}
            height={600}
          ></Image>
        ) : (
          <div>
            {messages.map(function (message: MessageObject, idx) {
              if (message.type == 'INCOMING') {
                return (
                  <p
                    itemType="incoming"
                    className="my-2 ml-auto max-w-[90%]"
                    id={message.id + idx}
                  >
                    <div className="w-fit rounded-lg rounded-br-none bg-accent_1 px-4 py-2 text-black">
                      {message.message}
                    </div>
                  </p>
                )
              }
              return (
                <p
                  itemType="outgoing"
                  className="my-2 max-w-[90%]"
                  id={message.id + idx}
                >
                  <div className=" w-fit rounded-lg rounded-bl-none bg-back_4 px-4 py-2">
                    {message.message}
                  </div>
                </p>
              )
            })}
          </div>
        )}

        {/* <p itemType="outgoing" className="my-2 ml-auto max-w-[90%]">
          <div className="w-fit rounded-lg rounded-br-none bg-accent_1 px-4 py-2 text-black">
            Test Message 3
          </div>
        </p>
        <p itemType="incoming" className="my-2 max-w-[90%]">
          <div className="w-fit rounded-lg rounded-bl-none bg-back_4 px-4 py-2">
            Test Message 4
          </div>
        </p> */}
        {/* {[...Array(10)].map((value: undefined, index: number) => (
          <p itemType="incoming" className="my-2 max-w-[90%]">
            <div className="w-fit rounded-lg rounded-bl-none bg-back_4 px-4 py-2">
              Test Message {index + 5}
            </div>
          </p>
        ))} */}
      </div>
    </>
  )
}

export default DMFragment
