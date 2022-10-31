import { useEffect, useState } from 'react'

export default function useGet(asyncFunc, link, config, dep) {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  useEffect(() => {
    setStatus('pending')
    setData(null)
    setError(null)
    asyncFunc(link, config)
      .then(res => {
        setData(res.response)
        setStatus('success')
        setError(null)
      })
      .catch(err => {
        setError(err)
        setStatus('error')
        setData(null)
      })
  }, [asyncFunc, dep])

  return {
    data,
    error,
    isLoading: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error'
  }
}
