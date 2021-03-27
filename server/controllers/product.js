import convictionalService from '../service/convictionalService'

const get = async (req, res, next) => {
  try {
    const { productId } = req.params
    const apiService = new convictionalService()
    const products = await apiService.getProduct(productId)
    res.json(products)
  } catch (error) {
    next(error)
  }
}

const getList = async (req, res, next) => {
  try {
    const apiService = new convictionalService()
    const products = await apiService.getProductList()
    res.json(products)
  } catch (error) {
    next(error)
  }
}

export default {
  getList,
  get,
}

