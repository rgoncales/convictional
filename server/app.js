import fetch from 'node-fetch'
import express from 'express'
import routes from './routes'
require('babel-polyfill')

const app = express()
const port = 3000
routes(app)

//app.get('/', async (req, res) => {
//  const apiResponse = await fetch(
//    'https://my-json-server.typicode.com/convictional/engineering-interview/products'
//  )
//  const apiResponseJson = await apiResponse.json()
//  console.log(apiResponseJson)
//  res.send('Is all good')
//})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
