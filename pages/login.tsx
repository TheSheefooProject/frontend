import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/common/Button'
import Switch from '../components/common/Switch'
import TextBox from '../components/common/TextBox'

const Login: NextPage = () => {
  return (
    <div
      id="text_input_container"
      className={' relative bottom-0 max-h-[30vh] w-[100%]'}
    >
      <TextBox className="m-2"></TextBox>
    </div>
  )
}

export default Login
