import fetch from 'node-fetch'
require('babel-polyfill')

const get = async (req, res) => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/convictional/engineering-interview/products'
  )
  const apiResponseJson = await apiResponse.json()
  console.log(apiResponseJson)
  res.send('Is all good')
}

export default {
  get,
}
