import axios from 'axios'

class convictionalService {
  constructor() {
    const service = axios.create({
      baseURL: 'https://my-json-server.typicode.com',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
    this.service = service
    return this
  }

  getProducts = async productId => {
    let query = '/convictional/engineering-interview/products/'
    if (productId) {
      query += productId
    }
    const res = await this.service.get(query)
    return res.data
  }
}

export default convictionalService
