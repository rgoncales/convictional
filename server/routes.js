import productController from './controllers/product'
import storeController from './controllers/store'

export default app => {
  app.get('/product/:productId?', productController.get)
  app.get('/store/inventory', storeController.getInventory)
}
