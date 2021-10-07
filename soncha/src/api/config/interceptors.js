function convertResponse (res) {
  const response = {}

  switch (res.Response) {
  case 'False':
    response.data = null
    response.message = res.Error.message
    break
  default:
    response.data = res
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
