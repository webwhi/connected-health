import Myaxios from './Myaxios'
import { BASE_URL1, BASE_URL2 } from './baseapi'
export const LoginAPI = (clientId, password, sign, timestamp, username) => {
  return Myaxios.post(BASE_URL1 + '/v2/user/login', {
    clientId,
    password,
    sign,
    timestamp,
    username
  })
}
export const TextAPI = () => {
  return Myaxios.get(BASE_URL2 + '/api/word/')
}

export const BackgroundImgAPI = () => {
  return Myaxios.get(BASE_URL2 + '/api/bingpic/')
}
