import axios from 'axios'
const baseURL = 'http://192.168.85.222:7000/library'
const instance = axios.create({
  baseURL,
  timeout: 10000
})

// Adding a request interceptor
// instance.interceptors.request.use(function (config) {
//   return {
//     ...config,
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`
//     }
//   }
// })

// Common function to get acctual data from response
const responseBody = response => response.data

const requests = {
  get: url => instance.get(url).then(responseBody),
  post: (url, body) => instance.post(url, body).then(responseBody),
  patch: (url, body) => instance.patch(url, body).then(responseBody),
  delete: url => instance.delete(url).then(responseBody)
}

export default requests
