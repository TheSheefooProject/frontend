import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../../components/common/Button'

const Devpage: NextPage = () => {
  return (
    <main>
      <div className="md:[5vw] static min-h-screen bg-neutral px-10 pt-12 md:px-[20vw]  ">
        <Head>
          <title>Sheefoo | Dev Page</title>
        </Head>

        <h1 className=" border-b-2 border-secondary pb-2 text-right font-heading text-4xl text-primary">
          Settings
        </h1>
        <br />
        <Button onClick={() => console.log('I was clicked 💀')}></Button>
        <Button
          type="positive"
          text="Positive"
          onClick={() => console.log('I was clicked 💀')}
        ></Button>
        <Button
          type="negative"
          text="Negative"
          onClick={() => console.log('I was clicked 💀')}
        ></Button>
        <Button
          type="neutral"
          text="Neutral"
          onClick={() => console.log('I was clicked 💀')}
        ></Button>
        <Button
          disabled={true}
          onClick={() => console.log('I was clicked 💀')}
        ></Button>
        <Button
          disabled={true}
          type="positive"
          text="Positive"
          onClick={() => console.log('I was clicked 💀')}
        ></Button>
        <Button
          disabled={true}
          type="negative"
          text="Negative"
          onClick={() => console.log('I was clicked 💀')}
        ></Button>
        <Button
          disabled={true}
          type="neutral"
          text="Neutral"
          onClick={() => console.log('I was clicked 💀')}
        ></Button>
      </div>
    </main>
  )
}

export default Devpage
