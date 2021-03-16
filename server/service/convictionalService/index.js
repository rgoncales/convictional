import axios from 'axios'
import { productListSchema } from './validationSchema'
import { Product, Inventory } from './schema/product'

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

  throwError = message => {
    console.log(message)
  }

  getProducts = async productId => {
    let query = '/convictional/engineering-interview/products/'
    if (productId) {
      query += productId
    }
    const res = await this.service.get(query)
    const toReturn = []

    if (res.data.error) {
      this.throwError(res.data.error)
      return toReturn
    }

    let productList = []

    if (productId) {
      productList.push(res.data)
    } else {
      productList = res.data
    }

    const validation = productListSchema.validate(productList)
    if (validation.error) {
      this.throwError(validationError)
      return toReturn
    }

    for (const product of productList) {
      const formatted = new Product(product)
      toReturn.push(formatted.toJSON())
    }
    return toReturn
  }

  getInventory = async () => {
    const query = '/convictional/engineering-interview/products/'
    const res = await this.service.get(query)
    const toReturn = []

    if (res.data.error) {
      this.throwError(res.data.error)
      return []
    }

    const productList = res.data

    for (const product of productList) {
      for (const variant of product.variants) {
        const formatted = new Inventory({ product, variant })
        toReturn.push(formatted.toJSON())
      }
    }
    return toReturn
  }
}

export default convictionalService
