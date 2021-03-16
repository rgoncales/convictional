import convictionalService from '../service/convictionalService'

const get = async (req, res) => {
  const apiService = new convictionalService()
  const products = await apiService.getProducts()
  res.json(products)
}

export default {
  get,
}
