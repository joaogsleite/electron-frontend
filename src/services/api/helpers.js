
import { ipcRenderer } from '../electron'
import { makeid } from 'utils/random';

export const send = (eventName, args) => {
  const requestId = eventName + '-' + makeid(10)
  ipcRenderer.send(eventName, { args, requestId })
  return oneTimeListener(requestId)
}

export const oneTimeListener = (eventName) => {
  return new Promise((resolve, reject) => {
    const listener = (event, args) => {
      ipcRenderer.removeListener(eventName, listener)
      clearInterval(timeout)
      resolve(args)
    }
    const timeout = setTimeout(reject, 30*1000)
    ipcRenderer.on(eventName, listener)
  })
}
