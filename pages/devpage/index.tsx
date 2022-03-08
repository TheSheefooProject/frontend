import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../../components/common/Button'

const Devpage: NextPage = () => {
  return (
    <div className="static min-h-screen bg-neutral px-[10vw] pt-12">
      <Head>
        <title>Sheefoo | Dev Page</title>
      </Head>

      <h1 className="border-b-2 border-secondary pb-2 font-heading text-4xl text-primary">
        Sheefoo Dev Page
      </h1>
      <h2 className=" py-2 font-body text-lg font-normal text-primary">
        This is a development environment to collate styled components and
        create a cohesive style.
      </h2>
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
  )
}

export default Devpage
