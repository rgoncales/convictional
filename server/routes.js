import productController from './controllers/product'

export default app => {
  app.get('/', productController.get)
}
