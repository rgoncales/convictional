import convictionalService from '../service/convictionalService'

const getInventory = async (req, res, next) => {
  try {
    const apiService = new convictionalService()
    const inventory = await apiService.getInventory()
    res.json(inventory)
  } catch (error) {
    next(error)
  }
}

export default {
  getInventory,
}
