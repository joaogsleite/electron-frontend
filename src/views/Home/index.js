import React, { useState } from 'react'

import Title from 'components/Title'

import { hello } from 'services/api'
import useApi from 'utils/useApi'

export default function Home() {

  const [api, setApi] = useState(hello.sayHello)

  const [msg] = useApi(api)  

  const handleClick = () => {
    setApi(() => hello.sayHello('222'))
  }
  
  return <>
    <Title>Message</Title>
    {msg
      ? <p onClick={handleClick}>{msg}</p>
      : <p>Loading...</p>
    }
  </>
}
