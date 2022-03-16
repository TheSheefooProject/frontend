import '../styles/globals.css'
import '../styles/variables.css'

import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import Sidebar from '../components/common/Sidebar'
import Head from 'next/head'

import Button from '../components/common/Button'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-row">
      <Sidebar></Sidebar>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
