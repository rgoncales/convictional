import convictionalService from '../service/convictionalService'

const get = async (req, res) => {
  try {
    const { productId } = req.params
    const apiService = new convictionalService()
    const products = await apiService.getProducts(productId)
    res.json(products)
  } catch (error) {
    console.log(error)
  }
}

export default {
  get,
}
