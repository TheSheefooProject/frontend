import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral py-2">
      <Head>
        <title>Sheefoo</title>
      </Head>
      <h1 className="text-primary">Sheefo Rocks</h1>
    </div>
  )
}

export default Home
