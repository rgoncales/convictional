import convictionalService from '../service/convictionalService'

const get = async (req, res, next) => {
  try {
    const { productId } = req.params
    const apiService = new convictionalService()
    const products = await apiService.getProducts(productId)
    res.json(products)
  } catch (error) {
    next(error)
  }
}

export default {
  get,
}

