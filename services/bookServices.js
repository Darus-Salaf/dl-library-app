import requests from './http'

class bookRequests {
  getBooks(venue) {
    return requests.get('/get-books')
  }
}

export default new bookRequests()
