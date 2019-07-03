
import { send } from '../helpers'

export const sayHello = async (name = 'Frontend') => {
  return await send('/hello/say', name)
}


export default {
  sayHello
}
