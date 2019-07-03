import React, { useState } from 'react'

import Title from 'components/Title'
import Input from 'components/Input'
import Container from 'components/Container'

import { hello } from 'services/api'
import { useApi, useDebounce } from 'utils/hooks'

export default function Home() {

  const [name, setName] = useState('Frontend')

  const debouncedName = useDebounce(name, 500)
  const [msg, loading] = useApi(hello.sayHello, debouncedName)

  return (
    <Container>
      <Title>Message</Title>

      <Input value={name} onChange={setName} />

      <br /><br />

      <p>{msg}</p>

      {loading &&
        <p>Loading...</p>
      }
    </Container>
  )
}
