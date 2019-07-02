import React, { useEffect, useState } from 'react'

import Title from 'components/Title'

import { hello } from 'services/api'

export default function Home() {

  const [msg, setMsg] = useState()
  
  useEffect(() => {
    hello.sayHello().then(setMsg)
  }, [])

  return <>
    <Title>Message</Title>
    <p>{msg}</p>
  </>
}
