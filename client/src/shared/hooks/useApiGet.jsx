import { useEffect, useState } from "react"
import { useAPI } from "./useApi"


export const useAPIGet = (url='/test_users.json') => {
  const api = useAPI()
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    const [data, error] = await api.get(url)
    console.log([data, error])
    setData(data)
    setError(error)
  }
  
  useEffect(() => {
    fetchData()
  }, [url])

  return [data, error]
}
