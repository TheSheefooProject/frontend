import '../styles/globals.css'
import '../styles/variables.css'

import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import Head from 'next/head'

import Button from '../components/common/Button'

// Light/Dark theme switching function
let body: HTMLBodyElement | null = null
const toggleTheme = () => {
  if (body != null) {
    body.classList.toggle('theme-light')
    body.classList.toggle('theme-dark')
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    body = document.querySelector('body')
    if (body != null) {
      body.classList.add('theme-light')
    }
  })
  return (
    <>
      <Button
        text="Swap Theme"
        className="absolute m-2 bg-brand hover:bg-brand/75"
        onClick={toggleTheme}
      ></Button>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
