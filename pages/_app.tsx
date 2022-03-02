import '../styles/globals.css'
import '../styles/variables.css'

import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import Head from 'next/head'

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
      <button
        className="absolute m-2 rounded-md bg-brand pl-2 pt-1 pr-2 pb-1 hover:bg-brand/75"
        onClick={toggleTheme}
      >
        Swap Theme
      </button>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
