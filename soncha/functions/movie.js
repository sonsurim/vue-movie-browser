require('dotenv').config()
const axios = require('axios')
const { VUE_APP_API_URL, VUE_APP_API_KEY } = process.env

exports.handler = async function (event) {
  const options = JSON.parse(event.body)

  const { data } = await axios.get(`${VUE_APP_API_URL}`, {
    params: {
      apikey: VUE_APP_API_KEY,
      ...options
    }
  })

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
