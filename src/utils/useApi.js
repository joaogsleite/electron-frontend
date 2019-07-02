
import { useState, useEffect } from 'react'

export default function useApi(api) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setError(false)
    setLoading(true)
    api.then(setData).catch(() => {
      setError(true)
    }).then(() => {
      setLoading(false)
    })
  }, [api])

  return [
    loading ? undefined : data,
    error,
    loading,
  ]
}
