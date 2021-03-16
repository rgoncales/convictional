import express from 'express'
import routes from './routes'

const app = express()
app.set('json spaces', 2)
const port = 3000
routes(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
