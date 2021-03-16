import axios from 'axios'
import { productListSchema } from './validationSchema'
import { Product } from './schema/product'

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

    if (!res.data) {
      // throw error
    }

    let productList = []

    if (productId) {
      productList.push(res.data)
    } else {
      productList = res.data
    }

    const validation = productListSchema.validate(productList)
    if (validation.error) {
      // throw error
      console.log(validation.error)
      return []
    }

    const toReturn = []
    for (const product of productList) {
      const formatted = new Product(product)
      toReturn.push(formatted.toJSON())
    }
    return toReturn
  }
}

export default convictionalService
