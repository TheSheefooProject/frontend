import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import io from 'socket.io-client'

export interface Props {
  partner_id: string
  partner_name: string
  // prop_name:prop_type
}

type MessageObject = {
  message: string
  id: string
  type: 'INCOMING' | 'OUTGOING'
}
const socketConnection = io('http://localhost:3005', {
  transports:['websocket'],
})

const DMFragment: NextPage<Props> = (props) => {
  const { room_name } = props
  const [loading, setLoading] = React.useState({
    state: true,
    message: 'Getting previous messages',
  })

  const [previousMessages, setPreviousMessages] = React.useState([])
  React.useEffect(() => {

    const room = localStorage.getItem('');
    const name = store.getState().user.name;
    const user_id = store.getState().user._id;

    socketConnection.on('new-message', (data) => {
      console.log(data)
    })









    setLoading({ state: false, message: 'Loading completed' })
  }, [])

  return (
    <>
      <p className="pt-4 text-center font-heading text-xl">
        Now talking to {room_name} {loading.message}
      </p>
      <div id="messages_container" className="flex flex-col p-2 md:p-4">
        {loading.state ? (
          <Image
            src="/images/loading.gif" //TODO note this is a temp image, plz change
            width={400}
            height={600}
          ></Image>
        ) : (
          <div>
            {previousMessages.map(function (message: MessageObject, idx) {
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

        <p itemType="outgoing" className="my-2 ml-auto max-w-[90%]">
          <div className="w-fit rounded-lg rounded-br-none bg-accent_1 px-4 py-2 text-black">
            Test Message 3
          </div>
        </p>
        <p itemType="incoming" className="my-2 max-w-[90%]">
          <div className="w-fit rounded-lg rounded-bl-none bg-back_4 px-4 py-2">
            Test Message 4
          </div>
        </p>
        {[...Array(10)].map((value: undefined, index: number) => (
          <p itemType="incoming" className="my-2 max-w-[90%]">
            <div className="w-fit rounded-lg rounded-bl-none bg-back_4 px-4 py-2">
              Test Message {index + 5}
            </div>
          </p>
        ))}
      </div>
    </>
  )
}

export default DMFragment
