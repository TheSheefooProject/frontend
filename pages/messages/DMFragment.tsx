const DMFragment = () => {
  const userID = 'Test User'
  return (
    <>
      <p className="pt-4 text-center font-heading text-xl">
        Now talking to {userID}
      </p>
      <div id="messages_container" className="flex flex-col p-2 md:p-4">
        <p itemType="incoming" className="my-2 ml-auto max-w-[90%]">
          <div className="w-fit rounded-lg rounded-br-none bg-accent_1 px-4 py-2 text-black">
            Test Message 1
          </div>
        </p>
        <p itemType="outgoing" className="my-2 max-w-[90%]">
          <div className=" w-fit rounded-lg rounded-bl-none bg-back_4 px-4 py-2">
            Test Message 3 that is very long so that it can test the wrapping
            style on different screen widths. It has to be really long so that
            it even activates a wrap on the widest screen size.
          </div>
        </p>
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
        {[...Array(51)].map((value: undefined, index: number) => (
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
