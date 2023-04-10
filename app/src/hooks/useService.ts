import { useState, useEffect } from 'react'

export const useService = <T>(initialValue: T, callback: any) => {
  const [ data, setData ] = useState(initialValue)
  const [ isLoading, setLoading ] = useState(true)
  const [ error, setError ] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const response = await callback()

        setData(response)
        setLoading(false)
      } catch (e) {
        setError(e)
      }
    })()
  }, [])

  return { data, isLoading, error }
}
