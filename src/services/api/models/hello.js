
import { sendAsync } from '../helpers'

export const sayHello = async (name = 'Frontend') => {
  return await sendAsync('/hello/say', name)
}


export default {
  sayHello
}
