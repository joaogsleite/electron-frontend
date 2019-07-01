
import { sendAsync } from '../helpers'

export const sayHello = async () => {
  const name = 'Frontend'
  return await sendAsync('/hello/say', name)
}

export default {
  sayHello
}
