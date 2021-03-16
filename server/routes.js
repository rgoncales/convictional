import productController from './controllers/product'

export default app => {
  app.get('/product/:productId?', productController.get)
}
