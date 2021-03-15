import fetch from 'node-fetch'
const express = require('express')
const app = express()
require('babel-polyfill')
const port = 3000

app.get('/', async (req, res) => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/convictional/engineering-interview/products'
  )
  const apiResponseJson = await apiResponse.json()
  console.log(apiResponseJson)
  res.send('Is all good')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
