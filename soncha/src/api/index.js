import axios from 'axios'
import { setInterceptors } from '@/api/config/interceptors'

function create (url, options) {
  const instance = axios.create(Object.assign({ baseURL: url }, options))
  setInterceptors(instance)
  return instance
}

export const instance = create(process.env.VUE_APP_API_URL)
