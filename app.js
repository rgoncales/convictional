const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/convictional/engineering-interview/products'
  )
  const apiResponseJson = await apiResponse.json()
  console.log(apiResponseJson)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
