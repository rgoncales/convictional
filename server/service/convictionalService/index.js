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
    service.interceptors.response.use(this.handleSuccess, this.handleError)
    return this
  }

  handleSuccess = response => {
    return response
  }

  handleError = async error => {
    this.throwError(error.message)
  }

  throwError = message => {
    throw new Error(message)
  }

  validateProductList = data => {
    const validation = productListSchema.validate(data)
    if (validation.error) {
      this.throwError(validation.error)
    }
  }

  getProducts = async productId => {
    let query = '/convictional/engineering-interview/products/'
    if (productId) {
      query += productId
    }
    const res = await this.service.get(query)

    let productList = []
    if (productId) {
      productList.push(res.data)
    } else {
      productList = res.data
    }

    this.validateProductList(productList)

    const toReturn = []
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

    const productList = res.data
    this.validateProductList(productList)

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
