import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary/75 py-2">
      <Head>
        <title>Sheefoo</title>
      </Head>
      <h1>Sheefo Rocks</h1>
    </div>
  )
}

export default Home
