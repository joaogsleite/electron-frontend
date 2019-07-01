import React, { PureComponent } from 'react'

import Title from 'components/Title'

import { hello } from 'services/api'

export default class Home extends PureComponent {
  state = {
    msg: '',
  }
  componentDidMount = () => {
    hello.sayHello().then((msg) => {
      this.setState({ msg })
    })
  }
  render(){
    const { msg } = this.state
    return <div>
      <Title>Message</Title>
      <p>{msg}</p>
    </div>
  }
}
