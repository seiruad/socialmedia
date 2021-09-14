import { API } from "app-config/api"


export const useAPI = () => {
  const get = async (url) => {
    try {
      const res = await API.get(url)
      return [res.data, null]
    } catch(err) {
      return [null, err]
    }
  }

  return { get }
}
