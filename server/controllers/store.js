import convictionalService from '../service/convictionalService'

const getInventory = async (req, res) => {
  try {
    const apiService = new convictionalService()
    const inventory = await apiService.getInventory()
    res.json(inventory)
  } catch (error) {
    console.log(error)
  }
}

export default {
  getInventory,
}
