
import { useState, useEffect } from 'react'

export function useDebounce(input, debounce = 500) {
  const [value, setValue] = useState(input)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(input)
    }, debounce)
    return () => {
      clearTimeout(timer)
    }
  }, [input, debounce])

  return value
}

export function useApi(func, args) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
    setLoading(true)
    func(args).then(setData).catch(() => {
      setError(true)
    }).then(() => {
      setLoading(false)
    })
  }, [func, args])

  return [
    data,
    loading,
    error,
  ]
}
