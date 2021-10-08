import { instance } from '@/api/index'

const apikey = process.env.VUE_APP_API_KEY

function getMovieList (keyword = 'lion', page = 1) {
  return instance.get('', {
    params: {
      apikey,
      s: keyword,
      page
    }
  })
}

function getMovieDetail (id, plot = 'long') {
  return instance.get('', {
    params: {
      apikey,
      i: id,
      plot
    }
  })
}

export {
  getMovieList,
  getMovieDetail
}
