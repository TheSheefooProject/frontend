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

      <h1 className="border-b-2 border-secondary pb-2 text-4xl text-primary">
        Sheefoo Dev Page
      </h1>
      <h2 className="py-2 text-primary">
        This is a development environment to collate styled components and
        create a cohesive style.
      </h2>
      <Button className="text-primary"></Button>
    </div>
  )
}

export default Devpage
