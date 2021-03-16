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
    const res = await this.service.get(
      '/convictional/engineering-interview/products'
    )
    return res.data
  }
}

export default convictionalService
