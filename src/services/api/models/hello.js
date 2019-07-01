
import { sendAsync } from '../helpers'

export const sayHello = async () => {
  const name = 'Frontend'
  return await sendAsync('say-hello', name)
}

export default {
  sayHello
}
