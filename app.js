const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/convictional/engineering-interview/products'
  )
  const apiResponseJson = await apiResponse.json()
  // await db.collection('collection').insertOne(apiResponseJson)
  console.log(apiResponseJson)
  res.send('Done – check console log')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
