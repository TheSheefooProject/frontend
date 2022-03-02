import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral py-2">
      <Head>
        <title>Sheefoo</title>
      </Head>
      <h1 className="text-primary">Sheefo Rocks</h1>
      <Link href="/devpage">
        <a className="rounded-md bg-brand px-2 py-1 hover:bg-brand/75">
          Dev Page
        </a>
      </Link>
    </div>
  )
}

export default Home
