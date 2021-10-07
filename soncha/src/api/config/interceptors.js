function convertResponse (res) {
  const response = {}

  console.log(res)
  switch (res.Response) {
  case 'False':
    response.data = null
    response.total = 0
    response.message = res.Error.message
    break
  default:
    response.data = res.Search
    response.total = res.totalResults
  }

  return response
}

function setInterceptors (instance) {
  instance.interceptors.response.use(
    config => convertResponse(config.data),
    error => {
      Promise.reject(error.response)
      return convertResponse(error.response)
    }
  )
  return instance
}

export { setInterceptors }
