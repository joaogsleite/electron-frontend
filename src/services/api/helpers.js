
import { ipcRenderer } from '../electron'

export const send = (eventName, args) => {
  return ipcRenderer.send(eventName, args)
}

export const sendAsync = (eventName, args) => {
  send(eventName, args)
  return oneTimeListenerAsync(`${eventName}-response`)
}

export const on = (eventName, callback) => {
  ipcRenderer.on(eventName, callback)
}

export const oneTimeListener = (eventName, callback) => {
  const listener = (event, args) => {
    ipcRenderer.removeListener(eventName, listener)
    callback(args)
  }
  ipcRenderer.on(eventName, listener)
}

export const oneTimeListenerAsync = (eventName) => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(reject, 30*1000)
    oneTimeListener(eventName, (args) => {
      clearInterval(timeout)
      resolve(args)
    })
  })
}
