import express from 'express'
import routes from './routes'

const app = express()
const port = 3000
routes(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
